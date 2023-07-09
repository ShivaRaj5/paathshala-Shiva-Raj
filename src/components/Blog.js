import React, { useEffect } from 'react'
import CreateBlogImg from '../images/createblogimg.jpg'
import PostContent from './PostContent'
import 'reactjs-popup/dist/index.css';
import { Link, useNavigate } from 'react-router-dom';
const Blog = () => {
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
      // const token=data.tokens[data.tokens.length-1];
      // console.log(token.token)
      // localStorage.setItem("jwtoken",token.token);
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
  return (
    <>
      <div className="blogContainer">
        <div className="blogContent">
          <div className="blogC">
            <h1>Create a Blog</h1>
            <h2>Share your story with the world. Stand out with a professionally-designed template that can be customized to fit your brand. Promote your blog and build your online presence with Squarespace's built-in suite of marketing tools.</h2>
            <Link to="/blog/createblog"><button>Get Started</button></Link>
          </div>
          <img src={CreateBlogImg} alt="img"/>
        </div>
      </div>
      <PostContent/>
    </>
  )
}

export default Blog