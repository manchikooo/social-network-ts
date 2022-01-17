import React from 'react';
import styles from "./Users.module.css";
import {InitialStateType} from "../../../Redux/UsersReducer";

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

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    if (props.currentPage === 1) {
        for (let i = props.currentPage; i < props.currentPage + 7; i++) {
            pages.push(i)
        }
    } else if (props.currentPage === 2) {
        for (let i = props.currentPage - 1; i < props.currentPage + 6; i++) {
            pages.push(i)
        }
    } else if (props.currentPage === 3) {
        for (let i = props.currentPage - 2; i < props.currentPage + 5; i++) {
            pages.push(i)
        }
    } else if (props.currentPage === pagesCount) {
        for (let i = props.currentPage - 6; i < props.currentPage + 1; i++) {
            pages.push(i)
        }
    } else if (props.currentPage === pagesCount - 1) {
        for (let i = props.currentPage - 5; i < props.currentPage + 2; i++) {
            pages.push(i)
        }
    } else if (props.currentPage === pagesCount - 2) {
        for (let i = props.currentPage - 4; i < props.currentPage + 3; i++) {
            pages.push(i)
        }
    } else if (props.currentPage === pagesCount - 3) {
        for (let i = props.currentPage - 3; i < props.currentPage + 4; i++) {
            pages.push(i)
        }
    } else for (let i = props.currentPage - 3; i < props.currentPage + 4; i++) {
        pages.push(i)
    }


    return (
        <>
            <div className={styles.paginatorForUsers}>
                    <span onClick={props.goToFirstUserPage}
                          className={styles.arrowsForUsersButton}
                    >
                        ❮❮
                    </span>

                {pages.map(p => {
                    return <span
                        style={{cursor: "pointer"}}
                        className={props.currentPage === p ? styles.selectedPage : styles.unSelectedPage}
                        onClick={() => props.onPageChanged(p)}
                    >{p}</span>
                })
                }

                <span onClick={props.goToLastUserPage}
                      className={styles.arrowsForUsersButton}
                >
                        ❯❯
                    </span>
            </div>
            <div className={styles.wrapper}>
                {
                    props.usersPage.users.map(u =>
                        <div className={styles.userBlock} key={u.id}>
                            <div className={styles.userAvatarAndButtonBlock}>
                                <div className={styles.userAvatar}>
                                    <img style={{maxHeight: '80px'}}
                                         src={u.photos.small !== null ? u.photos.small : 'https://cdn-icons-png.flaticon.com/512/147/147144.png'}/>
                                </div>
                                <div className={styles.userButtonFollowBlock}>
                                    {u.followed
                                        ? <button onClick={() => {
                                            props.followUnfollowUserAC(u.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            props.followUnfollowUserAC(u.id)
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
            <div className={styles.paginatorForUsers}>
                    <span onClick={props.goToFirstUserPage}
                          className={styles.arrowsForUsersButton}
                    >
                        ❮❮
                    </span>

                {pages.map(p => {
                    return <span
                        style={{cursor: "pointer"}}
                        className={props.currentPage === p ? styles.selectedPage : styles.unSelectedPage}
                        onClick={() => props.onPageChanged(p)}
                    >{p}</span>
                })
                }

                <span onClick={props.goToLastUserPage}
                      className={styles.arrowsForUsersButton}
                >
                        ❯❯
                    </span>
            </div>
        </>
    );
};
