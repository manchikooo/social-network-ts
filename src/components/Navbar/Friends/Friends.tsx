import classes from './Friends.module.css'
import {FriendsItem} from "./FriendsItem";
import React from 'react';
import {FriendsItemType} from "../../../Redux/SidebarReducer";

type PropsType = {
    friends: Array<FriendsItemType>
}

export const Friends = (props: PropsType) => {
    let friendsElements = props.friends.map(f => <FriendsItem key={f.id} name={f.name}/>)

    return (
        <div className={classes.friends}>
            <div className={classes.friendsTitle}>Friends</div>
            <div className={classes.friendsBlock}>
                {friendsElements}
            </div>
        </div>
    )
}