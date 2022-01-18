import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../../Redux/ProfilePageReducer";

type ProfileType = {
    profile: UserProfileType
}

export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile