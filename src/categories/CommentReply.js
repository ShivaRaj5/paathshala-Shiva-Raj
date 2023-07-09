import React from 'react'

const CommentReply = (props) => {
    return (
        <>
            <div className="commentReplyContainer">
                <div className="commentCardReply">
                    <h4>Replied User</h4>
                    <p>Thank you so much for your incredibly kind and uplifting comment! Your words truly touched my heart and brought a big smile to my face.</p>
                </div>
                <div className="likeReply">
                    <p>Like</p>
                    <p>Reply</p>
                </div>
            </div>
        </>
    )
}

export default CommentReply;