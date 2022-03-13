import React from "react";
import {ProfileInfo} from "./ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../../Redux/ProfilePageReducer";
import {Preloader} from "../../common/preloader/Preloader";

type ProfileType = {
    profile: UserProfileType
    status: string
    isFetching: boolean
    updateStatus: (status: string) => void
}

export const Profile = (props: ProfileType) => {
    console.log(props.profile)
    if (!props.profile.hasOwnProperty('aboutMe')) return <Preloader/>
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