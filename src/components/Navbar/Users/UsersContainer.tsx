import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/ReduxStore";
import {
    followUnfollowUser,
    InitialStateType,
    isToggleFollowingInProgress,
    isToggleLoader,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    UserType
} from "../../../Redux/UsersReducer";
import {UsersAPIComponent} from "./UsersAPIComponent";

type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: Array<string>
}
type MapDispatchToPropsType = {
    followUnfollowUser: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    isToggleLoader: (isFetching: boolean) => void
    isToggleFollowingInProgress: (isFollowingInProgress: boolean, userId: string) => void
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

export const UsersContainer = connect(mapStateToProps,
    {
        followUnfollowUser,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        isToggleLoader,
        isToggleFollowingInProgress
    })(UsersAPIComponent)
