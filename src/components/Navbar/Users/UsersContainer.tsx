import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/ReduxStore";
import {followUnfollowTC, getUsersTC, InitialStateType, setCurrentPage, UserType} from "../../../Redux/UsersReducer";
import {UsersAPIComponent} from "./UsersAPIComponent";
import {compose} from "redux";
import {getUserProfileTC} from "../../../Redux/ProfilePageReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirectHOC} from "../../../HOC/withAuthRedirectHOC";
import {Users} from "./Users";

type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: Array<string>
}
type MapDispatchToPropsType = {
    followUnfollowTC: (userID: string, followValue: boolean) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    isToggleLoader: (isFetching: boolean) => void
    isToggleFollowingInProgress: (isFollowingInProgress: boolean, userId: string) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress,
    }
}

export default compose<React.ComponentType>(
    withAuthRedirectHOC,
    connect(mapStateToProps,
        {
            setCurrentPage,
            getUsersTC,
            followUnfollowTC,
        }),
    withRouter,
)(UsersAPIComponent)
