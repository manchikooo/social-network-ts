import classes from './../Dialogs.module.css'

export type MessageType = {
    id: number
    message: string
}

export const Message = (props: MessageType) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

