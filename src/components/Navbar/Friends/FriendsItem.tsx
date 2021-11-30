import React from "react";
import {FriendsItemType} from "../../../Redux/state";
import classes from './Friends.module.css'

type PropsType = {
    name: string
}

export const FriendsItem = (props: PropsType) => {

    return (
        <div className={classes.friends}>
            <div className={classes.friendsItems}>
                <div className={classes.friendAva}>
                    <img
                        src='https://st2.depositphotos.com/3557671/11164/v/950/depositphotos_111644880-stock-illustration-man-avatar-icon-of-vector.jpg'/>
                </div>
                {props.name}
            </div>
        </div>
    )
}