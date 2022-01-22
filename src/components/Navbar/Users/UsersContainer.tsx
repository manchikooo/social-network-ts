import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/ReduxStore";
import {Dispatch} from "redux";
import {
    followUnfollowUser,
    InitialStateType, isToggleLoader,
    setCurrentPage, setTotalUsersCount,
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
}
type MapDispatchToPropsType = {
    followUnfollowUser: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    isToggleLoader: (isFetching: boolean) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         followUnfollowUser: (userID: string) => {
//             dispatch(followUnfollowUserAC(userID))
//         },
//         setUsers: (users: any) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         isToggleLoader: (isFetching: boolean) => {
//             dispatch(isToggleLoaderAC(isFetching))
//         },
//     }
// }

export const UsersContainer = connect(mapStateToProps,
    {followUnfollowUser, setUsers, setCurrentPage, setTotalUsersCount, isToggleLoader,})(UsersAPIComponent)
