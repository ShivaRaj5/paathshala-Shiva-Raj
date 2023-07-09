import React, { useEffect, useState } from 'react'
import Posts from './Posts';
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
const PostContent = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const getAllPosts = async () => {
        try {
            const getPosts = await fetch("https://coddingblog.onrender.com/getAllPosts", {
                method: 'GET',
                "Content-Type": "application/json"
            });
            const jsonData = await getPosts.json();
            setBlogPosts(jsonData.slice(0, 6));
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getAllPosts();
    }, [])
    return (
        <>
            <div className='popularPosts' style={{ width: '75vw', display: 'flex', margin: 'auto', marginTop: '50px', marginBottom: '20px' }}>
                <div className="popPost" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h2 style={{ color: 'black' }}>Popular Posts</h2>
                    <div className="popularPost" style={{ width: '55vw', display: 'flex', flexWrap: 'wrap' }}>
                        {blogPosts.map((ele, idx, arr) => {
                            return <Posts key={ele._id} id={ele._id} name={ele.name} blogTitle={ele.blogTitle} createdAt={ele.createdAt} blogDesc={ele.blogDesc} content={ele.content} blogCat={ele.blogCat} />
                        })}
                    </div>
                </div>
                <div className="asideContent">
                    <h2 style={{ color: 'black' }}>About iCoder Blog</h2>
                    <p style={{ lineHeight: '25px' }}>Welcome to our blog app! We are a vibrant community of writers, readers, and enthusiasts who are passionate about sharing and exploring diverse ideas. Our platform serves as a hub for engaging and thought-provoking content that spans various topics, ranging from technology and science to art and culture. At our core, we believe in the power of storytelling and the impact it can have on individuals and communities.</p>
                    <div className='asideAbout' style={{ marginTop: '20px' }}>
                        <a href="https://www.facebook.com/shiva.raaj.73" target="_blank">
                            <img src={facebook} alt="logo" style={{ width: '25px', height: '25px' }} />
                        </a>
                        <a href="https://twitter.com/abShivaRaj" target="_blank">
                            <img src={twitter} alt="logo" style={{ width: '25px', height: '25px' }} />
                        </a>
                        <a href="https://www.instagram.com/shiva_raj_5/" target="_blank">
                            <img src={instagram} alt="logo" style={{ width: '25px', height: '25px' }} />
                        </a>
                        <a href="https://linkedin.com/in/shiva-raj-6033b71a3" target="_blank">
                            <img src={linkedin} alt="logo" style={{ width: '25px', height: '25px' }} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostContent