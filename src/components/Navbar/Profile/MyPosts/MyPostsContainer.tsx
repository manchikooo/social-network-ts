import React from "react";
import {addPostAC, changePostAC} from "../../../../Redux/ProfilePageReducer";
import MyPosts from "./MyPosts";
import store from "../../../../Redux/ReduxStore";

export type MyPostsType = {
}

const MyPostsContainer = (props: MyPostsType) => {

    let state = store.getState()

    const addPost = () => {
        store.dispatch(addPostAC(state.ProfilePage.newPostText))
    }

    const changeNewPostText = (currentPostTextValue: string) =>
        store.dispatch(changePostAC(currentPostTextValue))

    return (
        <MyPosts changeNewPostText={changeNewPostText}
                 addPost={addPost}
                 newPostText={state.ProfilePage.newPostText}
                 allPosts={state.ProfilePage.posts}
        />
    )
}

export default MyPostsContainer