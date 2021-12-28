import React from "react";
import {PostType} from "./Post/Post";
import {ActionsType} from "../../../../Redux/store";
import {addPostAC, changePostAC} from "../../../../Redux/ProfilePageReducer";
import MyPosts from "./MyPosts";

export type MyPostsType = {
    allPosts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

const MyPostsContainer = (props: MyPostsType) => {

    const addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
    }

    const changeNewPostText = (currentPostTextValue: string) =>
        props.dispatch(changePostAC(currentPostTextValue))

    return (
        <MyPosts changeNewPostText={changeNewPostText}
                 addPost={addPost}
                 newPostText={props.newPostText}
                 allPosts={props.allPosts}
        />
    )
}

export default MyPostsContainer