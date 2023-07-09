import React, { useEffect, useState } from 'react'
import CommentReply from './CommentReply';

const CommentCard = () => {
    const [replyCard, setReplyCard] = useState(false);
    const toggleReplyCard = () => {
        setReplyCard(true);
    }
    // console.log(localStorage.getItem("jwtoken"))
    
    return (
        <>
            <div className="commentCardContent">
                <h4>Commented User</h4>
                <p>Your intelligence and insightful perspectives always leave me inspired and eager to learn more.</p>
            </div>
            <div className="likeReply">
                <p>Like</p>
                <p onClick={toggleReplyCard}>Reply</p>
                {replyCard && <CommentReply />}
            </div> 
        </>
    )
}

export default CommentCard