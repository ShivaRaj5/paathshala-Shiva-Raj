import React from 'react'
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <>
            <footer style={{ textAlign: 'center',padding:'20px'}}>
                <button disabled style={{cursor:'pointer',padding:'10px',backgroundColor:'black',color:'white',borderRadius:'10px',margin:'0px 10px'}}>&larr;</button>
                {pageNumbers.map((ele) => {
                    return (<button style={{cursor:'pointer',padding:'10px',backgroundColor:'black',color:'white',borderRadius:'10px',margin:'0px 10px'}} onClick={() => paginate(ele)} key={ele}>{ele}</button>)
                })}
                <button disabled style={{cursor:'pointer',padding:'10px',backgroundColor:'black',color:'white',borderRadius:'10px',margin:'0px 10px'}}>&rarr;</button>
            </footer>
        </>
    )
}

export default Pagination;