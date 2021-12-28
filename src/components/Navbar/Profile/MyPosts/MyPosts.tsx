import React from "react";
import classes from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";
import {v1} from "uuid";

export type MyPostsType = {
    changeNewPostText: (currentPostTextValue: string) => void
    addPost: () => void
    newPostText: string
    allPosts: Array<PostType>
}

const MyPosts = (props: MyPostsType) => {

    const clickAddPost = () => {
        props.addPost()
    }

    const enterNewPostText = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        props.changeNewPostText(e.currentTarget.value)

    let postsElements = props.allPosts.map(p => <Post messageInPost={p.messageInPost}
                                                      likes={p.likes}
                                                      comments={p.comments}
                                                      reposts={p.reposts}
                                                      id={v1()}/>)

    return (
        <div className={classes.postsBlock}>
            <h3 className={classes.myPostsTitle}>
                My posts
            </h3>
            <div className={classes.makeNewPost}>
                <textarea value={props.newPostText}
                          onChange={enterNewPostText}/>
                <div>
                    <button onClick={clickAddPost}>Add post</button>
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