import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";
import {v1} from "uuid";
import {ActionsType} from "../../../../Redux/state";

export type MyPostsType = {
    allPosts: Array<PostType>
    newPostText: string
    // changeNewTextCallback: (newText: string) => void
    dispatch: (action: ActionsType) => void
}

const MyPosts = (props: MyPostsType) => {

    const addPost = () => {
        props.dispatch({type: "ADD-POST", newPostText: props.newPostText})
    }

    const addNewTextToPost = (e: React.ChangeEvent<HTMLTextAreaElement>) => props.dispatch({
        type: "CHANGE-NEW-POST-TEXT",
        newText: e.currentTarget.value
    })

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