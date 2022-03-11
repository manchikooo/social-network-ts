import React from "react";
import {ProfileInfo} from "./ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../../Redux/ProfilePageReducer";

type ProfileType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
}

export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostContainer/>
        </div>
    )
}

export default Profile