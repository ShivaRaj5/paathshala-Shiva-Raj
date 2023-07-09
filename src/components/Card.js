import React from 'react'
import { Link } from 'react-router-dom';
import SportsImg from '../images/sportsimg.jpg'
import PoliticsImg from '../images/politicsimg.jpg'
import HistoricalImg from '../images/historicalimg.jpg'
import LifestyleImg from '../images/lifestyleimg.jpg'
import MusicImg from '../images/musicimg.jpg'
import EntertainmentImg from '../images/entertainmentimg.jpg'
import OtherImg from '../images/otherimg.jpg'
const Card = (props) => {
    const id = props.id;
    const category = props.blogCat;
    const url = `https://coddingblog.onrender.com/categories/${category}/${id}`
    let ImgName="";
    if(category==="Sports")
        ImgName=SportsImg
    else if(category=="Other")
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
                <div className="cardContent">
                    <img src={ImgName} alt="img" style={{ width: '350px', height: '400px' }} />
                    <div className="cardDesc" style={{ padding: '30px' }}>
                        <h4 style={{ color: 'gray' }}>{props.createdAt}</h4>
                        <h2 style={{ margin: '10px 0px' }}>{props.blogDesc}</h2>
                        <p
                            dangerouslySetInnerHTML={{ __html: props.content.length<200?props.content:props.content.slice(0,800)+" ..." }}
                        />
                        <h4 style={{ marginTop: '20px', color: '#2782a7' }}>{props.blogCat}</h4>
                    </div>
                </div>
            </Link>
        </>
    )
}
export default Card;