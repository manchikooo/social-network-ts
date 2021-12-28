import React from "react";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {ActionsType} from "../../../Redux/store";
import {changeMessageTextAC, sendMessageAC} from "../../../Redux/DialogsPageReducer";
import {Dialogs} from "./Dialogs";
import store from "../../../Redux/ReduxStore";


type DialogsType = {}

export const DialogsContainer = (props: DialogsType) => {
    let state = store.getState()

    // let dialogsElements = state.DialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    // let messagesElements = state.DialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)

    const changeNewMessageText = (currentMessageTextValue: string) => store.dispatch(changeMessageTextAC(currentMessageTextValue))
    const sendMessage = () => store.dispatch(sendMessageAC(state.DialogsPage.newMessageText))


    return (
        <Dialogs dialogItems={state.DialogsPage.dialogs}
                 messages={state.DialogsPage.messages}
                 newMessageText={state.DialogsPage.newMessageText}
                 changeNewMessageText={changeNewMessageText}
                 sendMessage={sendMessage}
        />
    )
}