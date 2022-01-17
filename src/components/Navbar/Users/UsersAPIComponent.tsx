import React from "react";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import {Users} from "./Users";

export class UsersAPIComponent extends React.Component<UsersPropsType, any> {

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
        return (
            <>
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       usersPage={this.props.UsersPage}
                       onPageChanged={this.onPageChanged}
                       goToFirstUserPage={this.goToFirstUserPage}
                       goToLastUserPage={this.goToLastUserPage}
                       followUnfollowUserAC={this.props.followUnfollowUserAC}
                       setUsers={this.props.setUsers}
                       setCurrentPage={this.props.setCurrentPage}
                       setTotalUsersCount={this.props.setTotalUsersCount}
                />
            </>
        )
    }
}
