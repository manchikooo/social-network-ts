import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemType) => {

    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog}>
            <NavLink to={path}
                     className={(navData) => navData.isActive ? classes.active : ''}>
               <img src='https://cdn-icons-png.flaticon.com/512/1184/1184457.png'/>
                <span className={classes.itemName}>{props.name}</span>
            </NavLink>
        </div>
    )
}
