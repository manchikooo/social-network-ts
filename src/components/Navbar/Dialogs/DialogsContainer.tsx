import React from "react";
import {changeMessageTextAC, sendMessageAC} from "../../../Redux/DialogsPageReducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../../StoreContext";

// type DialogsType = {}

export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState().DialogsPage

                const changeNewMessageText = (currentMessageTextValue: string) =>
                    store.dispatch(changeMessageTextAC(currentMessageTextValue))

                const sendMessage = () => store.dispatch(sendMessageAC(state.newMessageText))

                return <Dialogs dialogItems={state.dialogs}
                                messages={state.messages}
                                newMessageText={state.newMessageText}
                                changeNewMessageText={changeNewMessageText}
                                sendMessage={sendMessage}
                />
            }
        }
        </StoreContext.Consumer>
    )
}