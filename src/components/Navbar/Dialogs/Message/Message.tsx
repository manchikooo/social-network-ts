import classes from './../Dialogs.module.css'
import React from 'react'

export type MessageType = {
    id: string
    message: string
}

export const Message = (props: MessageType) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

