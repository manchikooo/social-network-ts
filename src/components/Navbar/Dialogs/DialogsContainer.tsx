import React from "react";
import {changeMessageTextAC, initialStateType, sendMessageAC} from "../../../Redux/DialogsPageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/ReduxStore";
import {compose, Dispatch} from "redux";
import {withAuthRedirectHOC} from "../../../HOC/withAuthRedirectHOC";

type MapStatePropsType = {
    dialogsPage: initialStateType
}
type MapDispatchToPropsType = {
    changeNewMessageText: (currentMessageTextValue: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectHOC
)(Dialogs)