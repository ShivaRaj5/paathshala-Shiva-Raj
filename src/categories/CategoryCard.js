import React from 'react'
import { Link } from 'react-router-dom';
const CategoryCard = (props) => {
  const id=props.id;
  const category=props.category;
  const url=`https://coddingblog.onrender.com/categories/${category}/${id}`
  return (
    <>
      <Link to={url} style={{textDecoration:'none',color:'black'}}>
        <div className="sportsC">
          <img src={props.imgsrc} alt="img" />
          <div className="cardSDesc">
            <h1>{props.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: props.content.length<200?props.content:props.content.slice(0,850)+" ..."}} />
          </div>
        </div>
      </Link>

    </>
  )
}
export default CategoryCard;