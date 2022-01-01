import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../Redux/ReduxStore";
import {Dispatch} from "redux";
import {addPostAC, changePostAC} from "../../../../Redux/ProfilePageReducer";
import {initialStateType} from "../../../../Redux/ProfilePageReducer";

type mapStateToPropsType = {
    profilePage: initialStateType
}
type mapDispatchToPropsType = {
    changeNewPostText: (currentPostTextValue: string) => void
    addPost: () => void
}

export type ProfilePagePropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.ProfilePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        changeNewPostText: (currentPostTextValue: string) =>
            dispatch(changePostAC(currentPostTextValue)),
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

// const MyPostsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 let state = store.getState().ProfilePage
//
//                 const addPost = () => {
//                     store.dispatch(addPostAC(state.newPostText))
//                 }
//                 const changeNewPostText = (currentPostTextValue: string) =>
//                     store.dispatch(changePostAC(currentPostTextValue))
//
//                 return <MyPosts changeNewPostText={changeNewPostText}
//                                 addPost={addPost}
//                                 newPostText={state.newPostText}
//                                 allPosts={state.posts}
//                 />
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }
