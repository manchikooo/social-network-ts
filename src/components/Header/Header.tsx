import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthDataType} from "../../Redux/AuthReducer";

type PropsType = {
    authData: AuthDataType
    login: string | null
    isAuthorized: boolean
    profilePhoto: string | null
}

const Header = (props: PropsType) => {
    let defaultAvatar = 'https://icon-library.com/images/avatar-icon/avatar-icon-4.jpg'
    console.log(props.isAuthorized, props.login, props.authData, props.profilePhoto)
    return (
        <header className={classes.header}>
            <img alt='header-icon'
                 src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/768px-LINE_logo.svg.png'/>
            <div className={classes.loginBlock}>
                {
                    props.isAuthorized
                        ? <div className={classes.profileImgAndLogin}>
                        <div>
                            <img alt='userProfilePhoto'
                                 src={props.profilePhoto
                                     ? props.profilePhoto
                                     : defaultAvatar}
                            />
                        </div>
                            <div className={classes.loginContainer}>{props.login}</div>
                        </div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header