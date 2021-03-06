import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {Friends} from "./Friends/Friends";
import {FriendsItemType} from "../../Redux/SidebarReducer";

type PropsType = {
    friends: Array<FriendsItemType>
}

export const Sidebar = (props: PropsType) => {
    return (<nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile'
                         activeClassName={classes.active}
                         // className={(navData) => navData.isActive ? classes.active : ''}
                >Profile</NavLink></div>
            <div className={classes.item}>
                <NavLink to='/dialogs'
                         activeClassName={classes.active}
                         // className={(navData) => navData.isActive ? classes.active : ''}
                >Dialogs</NavLink></div>
            <div className={classes.item}>
                <NavLink to='/users'
                         activeClassName={classes.active}
                         // className={(navData) => navData.isActive ? classes.active : ''}
                >Users</NavLink></div>
            <div className={classes.item}>
                <NavLink to='/news'
                         activeClassName={classes.active}
                         // className={(navData) => navData.isActive ? classes.active : ''}
                >News</NavLink></div>
            <div className={classes.item}>
                <NavLink to='/music'
                         activeClassName={classes.active}
                         // className={(navData) => navData.isActive ? classes.active : ''}
                >Music</NavLink></div>
            <div className={classes.item}>
                <NavLink to='/videos'
                         activeClassName={classes.active}
                         // className={(navData) => navData.isActive ? classes.active : ''}
                >Videos</NavLink></div>
            <div className={classes.item}>
                <NavLink to='/settings'
                         activeClassName={classes.active}
                         // className={(navData) => navData.isActive ? classes.active : ''}
                >Settings</NavLink></div>
            <Friends friends={props.friends}/>
        </nav>
    )
}
