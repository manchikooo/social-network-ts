
import classes from './Friends.module.css'
import {FriendsItem} from "./FriendsItem";
import {FriendsItemType} from "../../../Redux/store";
import React from 'react';


type PropsType = {
    friends: Array<FriendsItemType>
}

export const Friends = (props: PropsType) => {
    let friendsElements = props.friends.map(f => <FriendsItem name={f.name}/>)

    return (
        <div className={classes.friends}>
            <div className={classes.friendsTitle}>Friends</div>
            <div className={classes.friendsBlock}>
                {friendsElements}
            </div>
        </div>
    )
}