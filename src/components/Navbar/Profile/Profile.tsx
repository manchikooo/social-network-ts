import React from "react";
import classes from './Profile.module.css'
import MyPosts, {MyPostsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
import {addPost} from "../../../Redux/state";

type ProfileType = {
    allPosts: Array<PostType>
    addPostCallback: (postText: string) => void
}

export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts allPosts={props.allPosts} addPostCallback={props.addPostCallback}/>
        </div>
    )
}

export default Profile