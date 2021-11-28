import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {Friends} from "./Friends/Friends";
import {FriendsItemType} from "../../Redux/state";

type PropsType = {
    friends: Array<FriendsItemType>
}

const Navbar = (props: PropsType) => {
    return (<nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile'
                         className={(navData) => navData.isActive ? classes.active : ''}>Profile</NavLink></div>
            <div className={classes.item}>
                <NavLink to='/dialogs'
                         className={(navData) => navData.isActive ? classes.active : ''}>Dialogs</NavLink></div>
            <div className={classes.item}>
                <NavLink to='/news'
                         className={(navData) => navData.isActive ? classes.active : ''}>News</NavLink></div>
            <div className={classes.item}>
                <NavLink to='/music'
                         className={(navData) => navData.isActive ? classes.active : ''}>Music</NavLink></div>
            <div className={classes.item}>
                <NavLink to='/videos'
                         className={(navData) => navData.isActive ? classes.active : ''}>Videos</NavLink></div>
            <div className={classes.item}>
                <NavLink to='/settings'
                         className={(navData) => navData.isActive ? classes.active : ''}>Settings</NavLink></div>
            <Friends friends={props.friends}/>
        </nav>
    )
}

export default Navbar