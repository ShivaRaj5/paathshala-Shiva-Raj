import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SportsImg from '../images/sportsimg.jpg'
import PoliticsImg from '../images/politicsimg.jpg'
import HistoricalImg from '../images/historicalimg.jpg'
import LifestyleImg from '../images/lifestyleimg.jpg'
import MusicImg from '../images/musicimg.jpg'
import EntertainmentImg from '../images/entertainmentimg.jpg'
import OtherImg from '../images/otherimg.jpg'
import '../App.css';
const Posts = (props) => {
    const id=props.id;
    const category=props.blogCat;
    const url=`https://coddingblog.onrender.com/categories/${category}/${id}`;
    let ImgName="";
    if(category==="Sports")
        ImgName=SportsImg
    else if(category==="Other")
        ImgName=OtherImg;
    else if(category==="Entertainment")
        ImgName=EntertainmentImg
    else if(category==="Historical")
        ImgName=HistoricalImg
    else if(category==="Lifestyle")
        ImgName=LifestyleImg
    else if(category==="Music")
        ImgName=MusicImg
    else if(category==="Politics")
        ImgName=PoliticsImg
    return (
        <>
            <Link to={url} style={{textDecoration:'none',color:'black'}}>
            <div className="posts">
                <img src={ImgName} alt="img" style={{ height: '65px', width: '70px', marginTop: '7px', marginRight: '20px' }} />
                <div className="posthd" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h2>{props.blogTitle}</h2>
                    <p
                        dangerouslySetInnerHTML={{ __html: props.content.length<50?props.content:props.content.slice(0,45)+" ..." }}
                    />
                    <p>By <b>{props.name}</b> on <b>{props.createdAt}</b></p>
                </div>
            </div>
            </Link>
        </>
    )
}

export default Posts