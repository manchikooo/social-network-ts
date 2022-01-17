import React from "react";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";

export class UsersAPIComponent extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        this.props.isToggleLoader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.isToggleLoader(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.isToggleLoader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.isToggleLoader(false)
            this.props.setUsers(response.data.items)
        })
    }
    goToFirstUserPage = () => {
        this.props.isToggleLoader(true)
        this.props.setCurrentPage(1)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${this.props.pageSize}`).then(response => {
            this.props.isToggleLoader(false)
            this.props.setUsers(response.data.items)
        })
    }
    goToLastUserPage = () => {
        this.props.isToggleLoader(true)
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        this.props.setCurrentPage(pagesCount)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagesCount}&count=${this.props.pageSize}`).then(response => {
            this.props.isToggleLoader(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ? <Preloader/>
                        : <Users totalUsersCount={this.props.totalUsersCount}
                                 pageSize={this.props.pageSize}
                                 currentPage={this.props.currentPage}
                                 usersPage={this.props.UsersPage}
                                 onPageChanged={this.onPageChanged}
                                 goToFirstUserPage={this.goToFirstUserPage}
                                 goToLastUserPage={this.goToLastUserPage}
                                 followUnfollowUserAC={this.props.followUnfollowUser}
                                 setUsers={this.props.setUsers}
                                 setCurrentPage={this.props.setCurrentPage}
                                 setTotalUsersCount={this.props.setTotalUsersCount}
                        />
                }

            </>
        )
    }
}
