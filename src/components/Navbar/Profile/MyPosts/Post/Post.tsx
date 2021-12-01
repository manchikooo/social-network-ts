import React from "react";
import classes from './Post.module.css'
import {Link} from "react-router-dom";

export type PostType = {
    id: string
    messageInPost: string
    likes: number
    comments: number
    reposts: number
}

const Post = (props: PostType) => {
    return (
        <div className={classes.post}>
            <img src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
            <span>
                {props.messageInPost}
            </span>
            <div>
                <span>💚 {props.likes}</span> <Link to='/videos'> 💬 {props.comments}</Link> <span>↪️ {props.reposts}</span>
            </div>
        </div>
    )
}

export default Post