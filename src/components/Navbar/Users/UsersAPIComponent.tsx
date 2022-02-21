import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";
import {USERS_API} from "../../../api/api";

export class UsersAPIComponent extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        this.props.isToggleLoader(true)
        USERS_API.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.isToggleLoader(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.isToggleLoader(true)
        USERS_API.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.isToggleLoader(false)
                this.props.setUsers(data.items)
            })
    }
    goToFirstUserPage = () => {
        this.props.isToggleLoader(true)
        this.props.setCurrentPage(1)
        USERS_API.getUsers(1, this.props.pageSize)
            .then(data => {
                this.props.isToggleLoader(false)
                this.props.setUsers(data.items)
            })
    }
    goToLastUserPage = () => {
        this.props.isToggleLoader(true)
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        this.props.setCurrentPage(pagesCount)
        USERS_API.getUsers(pagesCount, this.props.pageSize)
            .then(data => {
                this.props.isToggleLoader(false)
                this.props.setUsers(data.items)
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
                                 usersPage={this.props.usersPage}
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
