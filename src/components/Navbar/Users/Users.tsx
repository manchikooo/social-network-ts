import React from "react";
import styles from "./Users.module.css";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";

class Users extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <>
                <div className={styles.wrapper}>
                    {
                        this.props.UsersPage.users.map(u =>
                            <div className={styles.userBlock} key={u.id}>
                                <div className={styles.userAvatarAndButtonBlock}>
                                    <div className={styles.userAvatar}>
                                        <img style={{maxHeight: '80px'}}
                                             src={u.photos.small !== null ? u.photos.small : 'https://cdn-icons-png.flaticon.com/512/147/147144.png'}/>
                                    </div>
                                    <div className={styles.userButtonFollowBlock}>
                                        {u.followed
                                            ? <button onClick={() => {
                                                this.props.followUnfollowUserAC(u.id)
                                            }}>Unfollow</button>
                                            : <button onClick={() => {
                                                this.props.followUnfollowUserAC(u.id)
                                            }}>Follow</button>}
                                    </div>
                                </div>
                                <div className={styles.userInfoBlock}>
                                    <div className={styles.userNameAndStatusBlock}>
                                        <div className={styles.fullNameStyle}>{u.name}</div>
                                        <div className={styles.statusStyle}>{u.status}</div>
                                    </div>
                                    <div className={styles.userLocationBlock}>
                                        <div className={styles.countryStyle}>{'u.location.country'}</div>
                                        <div className={styles.cityStyle}>{'u.location.city'}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </>
        )
    }
}

export default Users