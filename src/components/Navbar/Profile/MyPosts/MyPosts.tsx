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

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => alert(newPostElement.current?.value)

    return (
        <div className={classes.postsBlock}>
            <h3 className={classes.myPostsTitle}>
                My posts
            </h3>
            <div className={classes.makeNewPost}>
                <textarea ref={newPostElement}></textarea>
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