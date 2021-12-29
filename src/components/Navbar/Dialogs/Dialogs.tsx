import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem, DialogItemType} from "./DialogItem/DialogsItem";
import {Message, MessageType} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)

    const changeNewMessageText = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        props.changeNewMessageText(e.currentTarget.value)
    const sendMessage = () => props.sendMessage()


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea value={props.dialogsPage.newMessageText}
                              onChange={changeNewMessageText}/>
                </div>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}