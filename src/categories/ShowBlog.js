import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LikeCommmentShare from './LikeCommmentShare';
const ShowBlog = () => {
    const { id } = useParams();
    const { category } = useParams();
    const [blogData, setBlogData] = useState({});
    const [viewCount, setViewCount] = useState(0);
    const showCurrentBlog = async () => {
        const getCurrData = await fetch(`https://coddingblog.onrender.com/categories/${category}/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        const jsonData = await getCurrData.json();
        setBlogData(jsonData);
        setViewCount(1 + viewCount);
    }
    useEffect(() => {
        showCurrentBlog();
    }, [])
    return (
        <>
            <div className='blogContentContainer'>
                <div className="blogCount" style={{ display: 'flex' }}>
                    <h1 style={{ color: 'black' }}>{blogData.blogTitle}</h1>
                    <p style={{ marginTop: '13px', marginLeft: '20px' }}>({viewCount} views)</p>
                </div>
                <hr style={{ margin: '10px 0px' }} />
                <div id='allContent' dangerouslySetInnerHTML={{ __html: blogData.content }} />
                <hr style={{ margin: '10px 0px' }} />
                <LikeCommmentShare id={id}/>
                <hr style={{ margin: '10px 0px' }} />
            </div>
        </>
    )
}
export default ShowBlog;