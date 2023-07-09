import React, { useEffect, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useNavigate, useParams } from 'react-router-dom';
const UpdateBlog = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    const [content, setContent] = useState("");
    const [contentEditor, setContentEditor] = useState("");
    const handleEditorChange = (content, editor) => {
        // console.log(content)
        setContent(content)
        setContentEditor(content);
    }
    const [blogInfo, setBlogInfo] = useState({
        blogTitle: "",
        blogDesc: "",
        blogCat: ""
    })
    const inputChange = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        setBlogInfo({ ...blogInfo, [name]: val })
    }

    const getBlogData=async ()=>{
        const getBlog=await fetch(`https://coddingblog.onrender.com/${id}/getblog`,{
            method:'GET',
            headers:{
                "Content-Type":"application/json"
            }
        })
        const jsonData=await getBlog.json();
        setBlogInfo(jsonData)
        setContentEditor(jsonData.content)
        setContent(jsonData.content);
    }
    useEffect(()=>{
        getBlogData();
    },[])
    const updateData=async (e)=>{
        e.preventDefault();
        const {blogTitle,blogDesc,blogCat}=blogInfo;
        try{
            const updateBlog=await fetch(`https://coddingblog.onrender.com/${id}/updateblog`,{
                method:'PATCH',
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                },
                body:JSON.stringify({blogTitle,blogDesc,blogCat,content})
            })
            if(updateBlog){
                alert("Data has been updated successfully!");
                navigate("/profile")
            }
        }catch(err){
            alert(err);
        }
    }
    return (
        <>
            <form method='POST'>
                <div className="blogInfo">
                    <input type="text" name='blogTitle' onChange={inputChange} value={blogInfo.blogTitle} />
                    <input type="text" name='blogDesc' onChange={inputChange} value={blogInfo.blogDesc} />
                    <select name="blogCat" onChange={inputChange} value={blogInfo.blogCat}>
                        <option value="Category">Select Your Blog Category</option>
                        <option value="Sports">Sports</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Music">Music</option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="Historical">Historical</option>
                        <option value="Politics">Politics</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <Editor
                    value={contentEditor}
                    textareaName='content'
                    onEditorChange={handleEditorChange}
                    init={{
                        height: 523,
                        plugins: [
                            'a11ychecker', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export',
                            'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
                            'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | formatpainter casechange blocks | bold italic backcolor | ' +
                            'alignleft aligncenter alignright alignjustify | ' +
                            'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
                    }}
                />
                <button id="blogSubmitBtn" onClick={updateData}>Update Data</button>
            </form>
        </>
    )
}

export default UpdateBlog;