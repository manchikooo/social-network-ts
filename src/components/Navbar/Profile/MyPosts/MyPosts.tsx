import React from "react";
import classes from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";
import {v1} from "uuid";
import {ActionsType, addPostAC, changePostAC} from "../../../../Redux/state";

export type MyPostsType = {
    allPosts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

const MyPosts = (props: MyPostsType) => {

    const addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
    }

    const changeNewPostText = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        props.dispatch(changePostAC(e.currentTarget.value))

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
                          onChange={changeNewPostText}/>
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