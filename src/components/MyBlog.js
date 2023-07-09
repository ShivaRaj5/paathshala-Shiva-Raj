import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
const CategoryCard = (props) => {
    const navigate = useNavigate();
    const id = props.id;
    const category = props.category;
    const email = props.email;
    const url = `https://coddingblog.onrender.com/categories/${category}/${id}`
    const updateUrl = `/${id}/update`;
    const deleteData = async () => {
        try {
            const deletedData = await fetch(`https://coddingblog.onrender.com/${id}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json'
                }
            })
        } catch (err) {
            alert(err);
        }
    }
    return (
        <>
            <div className="sportsC">
                <Link to={url} style={{ textDecoration: 'none', color: 'black' }}>
                    <img src={props.imgsrc} alt="img" style={{width:'300px'}}/>
                    <div className="cardSDesc" >
                        <h1>{props.title}</h1>
                        <p dangerouslySetInnerHTML={{ __html: props.content.length < 200 ? props.content : props.content.slice(0, 850) + " ..." }} />
                    </div>
                </Link>
                <div className="deleteModifyBtn">
                    <button onClick={deleteData}>Delete</button>
                    <Link to={updateUrl}><button>Modify</button></Link>
                </div>
            </div>
        </>
    )
}
export default CategoryCard;