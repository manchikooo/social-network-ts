import React from "react";
import classes from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div className={classes.descriptionBlock}>
            <img className={classes.ava}
                 src='https://icon-library.com/images/avatar-icon/avatar-icon-4.jpg'/>
            <span>About me: etc</span>
        </div>
    )
}