import React from "react";
import classes from './ProfileInfo.module.css'
import {UserProfileType} from "../../../../Redux/ProfilePageReducer";
import {CommonPropsType} from "../ProfileContainer";

type ProfileInfoPropsType = {
    profile: UserProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    let defaultAvatar = 'https://icon-library.com/images/avatar-icon/avatar-icon-4.jpg'
    let facebook = props.profile.contacts.facebook
    let website = props.profile.contacts.website
    let vk = props.profile.contacts.vk
    let twitter = props.profile.contacts.twitter
    let instagram = props.profile.contacts.instagram
    let youtube = props.profile.contacts.youtube
    let github = props.profile.contacts.github
    let mainLink = props.profile.contacts.mainLink

    return (
        <div className={classes.ProfileInfoBlock}>
            <div className={classes.avatarContainer}>
                <img alt='ava'
                     src={props.profile.photos.large ? props.profile.photos.large : defaultAvatar}
                />
            </div>
            <div className={classes.infoContainer}>
                <div style={{fontWeight: 'bold', fontSize: '25px'}}>
                    {props.profile.fullName}
                </div>
                <div>
                    Связь со мной:
                    <div>
                        facebook: {facebook ? <a href={`https://${facebook}`}> {facebook}</a> : 'не имеется'}
                    </div>
                    <div>
                        website: {website ? <a href={`https://${website}`}>{website}</a> : 'не имеется'}
                    </div>
                    <div>
                        vk: {vk ? <a href={`https://${vk}`}>{vk}</a> : 'не имеется'}
                    </div>
                    <div>
                        twitter: {twitter ? <a href={`https://${twitter}`}>{twitter}</a> : 'не имеется'}
                    </div>
                    <div>
                        instagram: {instagram ? <a href={`https://${instagram}`}>{instagram}</a> : 'не имеется'}
                    </div>
                    <div>
                        youtube: {youtube ? <a href={`https://${youtube}`}>{youtube}</a> : 'не имеется'}
                    </div>
                    <div>
                        github: {github ?
                        <a href={`https://${github}`}>{github}</a> : 'не имеется'}</div>
                    <div>
                        mainLink: {mainLink ? <a href={`https://${mainLink}`}>{mainLink}</a> : 'не имеется'}
                    </div>
                </div>
            </div>
        </div>
    )
}