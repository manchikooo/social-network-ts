import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem, DialogItemType} from "./DialogItem/DialogsItem";
import {Message, MessageType} from "./Message/Message";


type DialogsType = {
    dialogItems: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageText: string
    sendNewMessage: () => void
    changeNewMessageText: (newMessage: string) => void
}

export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogItems.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)

    const changeNewValueOfMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => props.changeNewMessageText(e.currentTarget.value)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea value={props.newMessageText}
                              onChange={changeNewValueOfMessage}
                    />
                </div>
                <div>
                    <button onClick={props.sendNewMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}