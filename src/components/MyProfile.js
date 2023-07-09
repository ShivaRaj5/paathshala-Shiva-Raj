import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../categories/CategoryCard';
import SportsImg from '../images/sportsimg.jpg'
import MyBlog from '../components/MyBlog'
const MyProfile = () => {
    const navigate=useNavigate();
    const [email, setEmail] = useState("");
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
            setEmail(data.email);
            // console.log(name)
            if (!res.status === 200)
                throw new Error(res.error)
        } catch (err) {
            alert("Please login to use this page!")
            navigate('/login')
        }
    }
    useEffect(() => {
        callBlogPage();
    },[])
    const [allData, setAllData] = useState([]);
    const getData = async () => {
        const getAllPosts = await fetch(`/${email}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        const jsonData = await getAllPosts.json();
        setAllData(jsonData)
        // console.log(allData)
    }
    useEffect(() => {
        getData();
    }, [getData])
    return (
        <>
            <div className="sportsCard">
                <h1 style={{ fontSize: '50px', marginTop: '30px' }}>My Blogs</h1>
                <div className="sportsContent" >
                    {allData.map((ele, idx, arr) => {
                        return <MyBlog email={email} id={ele._id} category={ele.blogCat} imgsrc={SportsImg} key={ele._id} desc={ele.blogDesc} title={ele.blogTitle} content={ele.content} />
                    })}
                </div>
            </div>
        </>
    )
}

export default MyProfile;