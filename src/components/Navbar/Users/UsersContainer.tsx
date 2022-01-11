import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/ReduxStore";
import {Dispatch} from "redux";
import {followUnfollowUserAC, InitialStateType, setUsersAC, UserType} from "../../../Redux/UsersReducer";
import Users from "./Users";

type MapStateToPropsType = {
    UsersPage: InitialStateType
}
type MapDispatchToPropsType = {
    followUnfollowUserAC: (userID: string) => void,
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        UsersPage: state.UsersPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        followUnfollowUserAC: (userID: string) => {
            dispatch(followUnfollowUserAC(userID))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
