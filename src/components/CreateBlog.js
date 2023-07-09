import React, { useEffect, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useNavigate } from 'react-router-dom';
const CreateBlog = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const callBlogPage = async () => {
    try {
      const res = await fetch('https://coddingblog.onrender.com/blog', {
        method: 'GET',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })
      const data = await res.json();
      setName(data.name);
      setEmail(data.email);
      if (!res.status === 200)
        throw new Error(res.error)
    } catch (err) {
      alert("Please login to use this page!")
      navigate('/login')
    }
  }
  useEffect(() => {
    callBlogPage();
  })
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
  const sendBlogData = async (e) => {
    e.preventDefault();
    try {
      const {blogTitle,blogDesc,blogCat}=blogInfo;
      if(!blogTitle || !blogDesc || !blogCat)
        return alert("Please fill all the required fields!")
      const res = await fetch('/postblog', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name,email,blogTitle,blogDesc,blogCat,content })
      })
      console.log(res);
      if (res) {
        alert("Your blog has been posted successfully!")
        navigate('/')
      }
    } catch (err) {
      alert(err)
    }
  }
  return (
    <>
      <form method='POST'>
        <div className="blogInfo">
          <input type="text" value={name} disabled />
          <input type="text" value={email} disabled />
          <input type="text" name='blogTitle' onChange={inputChange} value={blogInfo.blogTitle} placeholder="Enter Your Blog Title" />
          <input type="text" name='blogDesc' onChange={inputChange} value={blogInfo.blogDesc} placeholder="Enter Your Blog Description" />
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
          initialValue='You can start writing your blog from here...'
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
        <button onClick={sendBlogData} id="blogSubmitBtn">Post Blog</button>
      </form>
    </>
  )
}

export default CreateBlog;