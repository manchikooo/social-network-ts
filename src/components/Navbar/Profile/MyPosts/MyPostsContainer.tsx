import React from "react";
import {addPostAC, changePostAC} from "../../../../Redux/ProfilePageReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../../StoreContext";

// export type MyPostsType = {}

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState().ProfilePage

                const addPost = () => {
                    store.dispatch(addPostAC(state.newPostText))
                }
                const changeNewPostText = (currentPostTextValue: string) =>
                    store.dispatch(changePostAC(currentPostTextValue))

                return <MyPosts changeNewPostText={changeNewPostText}
                                addPost={addPost}
                                newPostText={state.newPostText}
                                allPosts={state.posts}
                />
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer