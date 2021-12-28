import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
import {ActionsType} from "../../../Redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {
    allPosts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer allPosts={props.allPosts}
                              newPostText={props.newPostText}
                              dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile