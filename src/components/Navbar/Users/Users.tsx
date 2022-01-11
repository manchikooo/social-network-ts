import React from "react";
import styles from "./Users.module.css";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";

class Users extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    goToFirstUserPage = () => {
        this.props.setCurrentPage(1)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    goToLastUserPage = () => {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        this.props.setCurrentPage(pagesCount)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagesCount}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        if (this.props.currentPage === 1) {
            for (let i = this.props.currentPage; i < this.props.currentPage + 7; i++) {
                pages.push(i)
            }
        } else if (this.props.currentPage === 2) {
            for (let i = this.props.currentPage - 1; i < this.props.currentPage + 6; i++) {
                pages.push(i)
            }
        } else if (this.props.currentPage === 3) {
            for (let i = this.props.currentPage - 2; i < this.props.currentPage + 5; i++) {
                pages.push(i)
            }
        } else for (let i = this.props.currentPage - 3; i < this.props.currentPage + 4; i++) {
            pages.push(i)
        }


        // if (3 <= 3) {
        //     for (let i = this.props.currentPage; i < this.props.currentPage + 2; i++) {
        //         pages.push(i)
        //     }
        // } else for (let i = this.props.currentPage - 3; i < this.props.currentPage + 3; i++) {
        //     pages.push(i)
        // }


        return (
            <>
                <div className={styles.paginatorForUsers}>
                    <span onClick={this.goToFirstUserPage}
                          className={styles.arrowsForUsersButton}
                    >
                        ❮❮
                    </span>

                    {pages.map(p => {
                        return <span
                            style={{cursor: "pointer"}}
                            className={this.props.currentPage === p ? styles.selectedPage : styles.unSelectedPage}
                            onClick={() => this.onPageChanged(p)}
                        >{p}</span>
                    })
                    }

                    <span onClick={this.goToLastUserPage} className={styles.arrowsForUsersButton}
                    >
                        ❯❯
                    </span>
                </div>
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
                <div className={styles.paginatorForUsers}>
                    <span onClick={this.goToFirstUserPage}
                          className={styles.startPageForUsersButton}
                    >
                        ❮❮
                    </span>

                    {pages.map(p => {
                        return <span
                            style={{cursor: "pointer"}}
                            className={this.props.currentPage === p ? styles.selectedPage : styles.unSelectedPage}
                            onClick={() => this.onPageChanged(p)}
                        >{p}</span>
                    })
                    }

                    <span onClick={this.goToLastUserPage}
                          className={styles.arrowsForUsersButton}
                    >
                        ❯❯
                    </span>
                </div>
            </>
        )
    }
}

export default Users