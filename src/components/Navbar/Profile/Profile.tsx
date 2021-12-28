import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
import {ActionsType} from "../../../Redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {
}

export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile