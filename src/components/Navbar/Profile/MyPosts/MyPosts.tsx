import React from "react";
import classes from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";
import {v1} from "uuid";
import {ProfilePagePropsType} from "./MyPostsContainer";

const MyPosts = (props: ProfilePagePropsType) => {

    const clickAddPost = () => {
        props.addPost()
    }

    const enterNewPostText = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        props.changeNewPostText(e.currentTarget.value)

    let postsElements = props.profilePage.posts.map(p =>
        <Post
            key={p.id}
            messageInPost={p.messageInPost}
            likes={p.likes}
            comments={p.comments}
            reposts={p.reposts}
            id={v1()}
        />
    )

    return (
        <div className={classes.postsBlock}>
            <h3 className={classes.myPostsTitle}>
                My posts
            </h3>
            <div className={classes.makeNewPost}>
                <textarea value={props.profilePage.newPostText}
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