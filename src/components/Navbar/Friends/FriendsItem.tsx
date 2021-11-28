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
                        src='https://cdn-icons.flaticon.com/png/512/3641/premium/3641963.png?token=exp=1637860180~hmac=b589476014cf6251bd70a797a8f4a131'/>
                </div>
                {props.name}
            </div>
        </div>
    )
}