import React from "react";
import classes from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";

export type MyPostsType = {
    allPosts: Array<PostType>
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.allPosts.map(p => <Post messageInPost={p.messageInPost}
                                                      likes={p.likes}
                                                      comments={p.comments}
                                                      reposts={p.reposts}/>)

    return (
        <div className={classes.postsBlock}>
            <div className={classes.myPostsTitle}>
                My posts
            </div>
            <div className={classes.makeNewPost}>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.postedPosts}>
                <div className={classes.post}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts