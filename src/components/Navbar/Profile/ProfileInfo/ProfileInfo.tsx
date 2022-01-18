import React from "react";
import classes from './ProfileInfo.module.css'
import {UserProfileType} from "../../../../Redux/ProfilePageReducer";
import {ProfilePropsType} from "../ProfileContainer";

type ProfileInfoPropsType = {
    profile: UserProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    let defaultAvatar = 'https://icon-library.com/images/avatar-icon/avatar-icon-4.jpg'

    return (
        <div className={classes.descriptionBlock}>
            <img alt='ava' className={classes.ava}
                 src={props.profile.photos.large ? props.profile.photos.large : defaultAvatar}/>
            <span>About me: etc</span>
        </div>
    )
}