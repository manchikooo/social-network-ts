import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../../Redux/ProfilePageReducer";
import {Redirect} from "react-router-dom";

type ProfileType = {
    profile: UserProfileType
    isAuth: boolean
}

export const Profile = (props: ProfileType) => {

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile