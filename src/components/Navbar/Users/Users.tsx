import React from 'react';
import styles from "./Users.module.css";
import {InitialStateType} from "../../../Redux/UsersReducer";
import {NavLink} from "react-router-dom";
import Paginator from "../../common/Paginator";
import {USERS_API} from "../../../api/api";

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
                                            USERS_API.unfollowUser(u.id)
                                                .then(resultCode => {
                                                    if (resultCode === 0) {
                                                        props.followUnfollowUserAC(u.id)
                                                    }
                                                })
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            USERS_API.followUser(u.id)
                                                .then(resultCode => {
                                                    if (resultCode === 0) {
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
