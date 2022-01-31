import React from 'react';
import styles from "./Users.module.css";
import {InitialStateType} from "../../../Redux/UsersReducer";
import {NavLink} from "react-router-dom";
import Paginator from "../../common/Paginator";
import axios from "axios";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    usersPage: InitialStateType
    onPageChanged: (pageNumber: number) => void
    goToFirstUserPage: () => void
    goToLastUserPage: () => void
    followUnfollowUserAC: (userID: string) => void
    setUsers: (users: any) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}


export const Users = (props: PropsType) => {

    return (
        <>
            <Paginator
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                goToFirstUserPage={props.goToFirstUserPage}
                goToLastUserPage={props.goToLastUserPage}
                onPageChanged={props.onPageChanged}
            />
            <div className={styles.wrapper}>
                {
                    props.usersPage.users.map(u =>
                        <div className={styles.userBlock} key={u.id}>
                            <div className={styles.userAvatarAndButtonBlock}>
                                <div className={styles.userAvatar}>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img alt='userAva' style={{maxHeight: '80px'}}
                                             src={u.photos.small !== null ? u.photos.small : 'https://cdn-icons-png.flaticon.com/512/147/147144.png'}/>
                                    </NavLink>
                                </div>
                                <div className={styles.userButtonFollowBlock}>
                                    {u.followed
                                        ? <button onClick={() => {
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': '38693d4c-6e14-43e3-bc08-570c5b5670c4'
                                                }
                                            })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.followUnfollowUserAC(u.id)
                                                    }
                                                })
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': '38693d4c-6e14-43e3-bc08-570c5b5670c4'
                                                }
                                            })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.followUnfollowUserAC(u.id)
                                                    }
                                                })
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
            <Paginator
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                goToFirstUserPage={props.goToFirstUserPage}
                goToLastUserPage={props.goToLastUserPage}
                onPageChanged={props.onPageChanged}
            />
        </>
    );
};
