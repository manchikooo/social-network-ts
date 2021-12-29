import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {SuperMyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfileType = {
}

export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <SuperMyPostsContainer/>
        </div>
    )
}

export default Profile