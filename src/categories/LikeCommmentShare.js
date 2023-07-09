import React, { useEffect, useState } from 'react'
import LikeImg from '../images/like.png'
import CommentImg from '../images/comment.png'
import ShareImg from '../images/share.png'
import UserImg from '../images/user.png'
import CommentCard from './CommentCard'
const LikeCommmentShare = (props) => {
    const blogid=props.id;
    console.log(blogid)
    const [showComment, setShowComment] = useState(true);
    const getCookie = (name) => {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    useEffect(() => {
        if (getCookie("jwtoken") === null) {
            setShowComment(false);
        }
    }, [])
    return (
        <>
            {showComment?
                <>
                    <div className="lcsContainer">
                        <div className="lcsContent">
                            <div className="likeContainer">
                                <img src={LikeImg} alt="logo" />
                                <p>(10)</p>
                            </div>
                            <div className="commentContainer">
                                <img src={CommentImg} alt="logo" />
                                <p>(20)</p>
                            </div>
                            <div className="shareContainer">
                                <img src={ShareImg} alt="logo" />
                                <p>(30)</p>
                            </div>
                        </div>
                    </div>
                    <div id='lcsCommentContainer' className="lcsCommentContainer">
                        <img src={UserImg} alt="" />
                        <input type="text" placeholder='Write a comment ...' />
                        <button>Comment</button>
                    </div>
                    <div className="commentCard">
                        <CommentCard />
                    </div>
                </>:<h2 style={{textAlign:'center'}}>Please login to perform further actions with this blog!</h2>
            }
        </>
    )
}

export default LikeCommmentShare