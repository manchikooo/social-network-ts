import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";
import {USERS_API} from "../../../api/api";
import {followUnfollowTC} from "../../../Redux/UsersReducer";

export class UsersAPIComponent extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }
    goToFirstUserPage = () => {
        this.props.getUsersTC(1, this.props.pageSize)
    }
    goToLastUserPage = () => {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        this.props.getUsersTC(pagesCount, this.props.pageSize)
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
                                 followUnfollowTC={this.props.followUnfollowTC}
                                 setUsers={this.props.setUsers}
                                 setCurrentPage={this.props.setCurrentPage}
                                 setTotalUsersCount={this.props.setTotalUsersCount}
                        />
                }
            </>
        )
    }
}
