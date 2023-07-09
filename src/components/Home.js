import React, { useEffect, useState } from 'react'
import Guitar from '../images/guitar.jpg';
import Watch from '../images/watch.jpg';
import Car from '../images/car.jpg';
import Profile from '../images/profile.png';
import '../App.css'
import Card from './Card';
import PostContent from './PostContent';
import Pagination from './Pagination'
import search from '../images/search.png'
const Home = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const getAllPosts = async () => {
        try {
            const getPosts = await fetch("https://coddingblog.onrender.com/getAllPosts", {
                method: 'GET',
                "Content-Type": "application/json"
            });
            const jsonData = await getPosts.json();
            setBlogPosts(jsonData);
            // console.log(blogPosts[0].blogCat);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getAllPosts();
    }, [])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    const indexOfLastPage = currentPage * postsPerPage;
    const indexofFirstPost = indexOfLastPage - postsPerPage;
    const currentPosts = blogPosts.slice(indexofFirstPost, indexOfLastPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const [searchTerm, SetSearchTerm] = useState('');
    //check for Navigation Timing API support
    // console.log(document.cookie=="jwtoken")

    return (
        <>
            {/* <section className='homeSection'>
                <div className="topImgContainer" style={{ display: 'flex' }}>
                    <img src={Guitar} alt="img" />
                    <div className="topContainerContent centered" style={{ width: '500px' }}>
                        <span style={{ backgroundColor: '#2782a7', color: 'white', fontWeight: 'bold', padding: '2px 15px' }}>{blogPosts[0].blogCat}</span>
                        <h1 style={{ margin: '10px 0px' }}>{blogPosts[0].blogDesc}</h1>
                        <div className="logonamedate" style={{ display: 'flex', margin: '0px', padding: '0px', width: '355px' }}>
                            <img src={Profile} alt="logo" style={{ width: '20px', height: '20px', borderRadius: '100%' }} />
                            <h3 style={{ color: 'gray' }}>{blogPosts[0].name} . {blogPosts[0].createdAt}</h3>
                        </div>
                    </div>
                    <div className="rightImgContent">
                        <img src={Watch} alt="img" />
                        <div className="topContainerContent centered" style={{ width: '350px', left: '74%', top: '45%' }}>
                            <span style={{ backgroundColor: 'green', color: 'white', fontWeight: 'bold', padding: '2px 15px' }}>{blogPosts[1].blogCat}</span>
                            <h1 style={{ margin: '10px 0px' }}>{blogPosts[1].blogDesc}</h1>
                            <div className="logonamedate" style={{ display: 'flex', margin: '0px', padding: '0px', width: '320px' }}>
                                <h3 style={{ color: 'gray' }}>{blogPosts[1].name} . {blogPosts[1].createdAt}</h3>
                            </div>
                        </div>
                        <img src={Car} alt="img" />
                        <div className="topContainerContent centered" style={{ width: '350px', left: '74%', top: '85%' }}>
                            <span style={{ backgroundColor: 'green', color: 'white', fontWeight: 'bold', padding: '2px 15px' }}>{blogPosts[2].blogCat}</span>
                            <h1 style={{ margin: '10px 0px' }}>{blogPosts[2].blogDesc}</h1>
                            <div className="logonamedate" style={{ display: 'flex', margin: '0px', padding: '0px', width: '320px' }}>
                                <h3 style={{ color: 'gray' }}>{blogPosts[2].name} . {blogPosts[2].createdAt}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            
            <div className="searchdiv">
                
                    <input type="text" placeholder='Search' style={{ fontSize: '20px', fontWeight: 'bold' }} onChange={(e) => SetSearchTerm(e.target.value)} />
                    <button style={{ backgroundColor: 'black', cursor: 'pointer' }} disabled><img src={search} alt="logo" /></button>
                
                {/* <h3 className='onlyForMobile'>iCoder Blog</h3> */}
            </div>
            <div className="container" style={{ backgroundColor: 'whitesmoke' }}>
                <div className="cardContainer">
                    {currentPosts.filter((val) => {
                        if (searchTerm === "")
                            return val;
                        else if (val.blogDesc.toLowerCase().includes(searchTerm.toLowerCase()))
                            return val;
                    }).map((ele, idx, arr) => {
                        return (
                            <>
                                <Card key={ele._id} id={ele._id} createdAt={ele.createdAt} blogDesc={ele.blogDesc} content={ele.content} blogCat={ele.blogCat} />
                            </>
                        )
                    })}
                </div>
                <Pagination postsPerPage={postsPerPage} totalPosts={blogPosts.length} paginate={paginate} />
            </div>
            <PostContent />
        </>
    )
}

export default Home;