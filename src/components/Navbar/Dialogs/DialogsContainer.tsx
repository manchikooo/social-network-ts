import React from "react";
import {changeMessageTextAC, initialStateType, sendMessageAC} from "../../../Redux/DialogsPageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/ReduxStore";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogsPage: initialStateType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    changeNewMessageText: (currentMessageTextValue: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuthorized
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        changeNewMessageText: (currentMessageTextValue: string) => {
            dispatch(changeMessageTextAC(currentMessageTextValue))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)