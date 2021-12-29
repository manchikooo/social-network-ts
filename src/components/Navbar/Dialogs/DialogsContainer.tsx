import React from "react";
import {changeMessageTextAC, initialStateType, sendMessageAC} from "../../../Redux/DialogsPageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/ReduxStore";
import {Dispatch} from "redux";

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
        dialogsPage: state.DialogsPage
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

export const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

// export const DialogsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 let state = store.getState().DialogsPage
//
//                 const changeNewMessageText = (currentMessageTextValue: string) =>
//                     store.dispatch(changeMessageTextAC(currentMessageTextValue))
//
//                 const sendMessage = () => store.dispatch(sendMessageAC(state.newMessageText))
//
//                 return <Dialogs dialogItems={state.dialogs}
//                                 messages={state.messages}
//                                 newMessageText={state.newMessageText}
//                                 changeNewMessageText={changeNewMessageText}
//                                 sendMessage={sendMessage}
//                 />
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }