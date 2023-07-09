import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import PoliticsImg from '../images/politicsimg.jpg'
const Politics = () => {
  const [allData, setAllData] = useState([]);
  const getData = async () => {
    const getAllPosts = await fetch("https://coddingblog.onrender.com/categories/Politics", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    const jsonData = await getAllPosts.json();
    setAllData(jsonData)
    // console.log(allData);
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      <div className="sportsCard">
        <h1 style={{ fontSize: '50px', marginTop: '30px' }}>Top Politics Blogs</h1>
        <div className="sportsContent" >
            {allData.map((ele, idx, arr) => {
              return <CategoryCard  id={ele._id} category={ele.blogCat} imgsrc={PoliticsImg} key={ele._id} desc={ele.blogDesc} title={ele.blogTitle} content={ele.content}/>
            })}
        </div>
      </div>
    </>
  )
}

export default Politics