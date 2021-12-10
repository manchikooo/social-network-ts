import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";
import {v1} from "uuid";

export type MyPostsType = {
    allPosts: Array<PostType>
    addPostCallback: (postText: string) => void
    newPostText: string
    changeNewTextCallback: (newText: string) => void
}

const MyPosts = (props: MyPostsType) => {

    const addPost = () => {
        props.addPostCallback(props.newPostText)
        // alert(newPostElement.current?.value)
    }

    const addNewTextToPost = (e: React.ChangeEvent<HTMLTextAreaElement>) => props.changeNewTextCallback(e.currentTarget.value)

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
                          onChange={addNewTextToPost}/>
                <div>
                    <button onClick={addPost}>Add post</button>
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