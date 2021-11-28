import React from "react";
import classes from './Profile.module.css'
import MyPosts, {MyPostsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";

type ProfileType = {
    allPosts: Array<PostType>
}

export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts allPosts={props.allPosts}/>
        </div>
    )
}

export default Profile