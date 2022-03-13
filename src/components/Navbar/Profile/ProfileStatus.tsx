import React, {useEffect, useState} from 'react';
import styles from './ProfileStatus.module.css'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>('')
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
        // setStatus(props.status)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setEditMode(false)
            props.updateStatus(status)
        }
    }
    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={styles.statusContainer}>
            {editMode
                ? <div>
                    <input
                        className={styles.inputStyle}
                        autoFocus
                        onKeyPress={onEnterHandler}
                        onBlur={deActivateEditMode}
                        onChange={onStatusChange}
                        value={status}
                    />
                </div>
                : <div>
                    <span
                        onDoubleClick={activateEditMode}>
                        {props.status}
                    </span>
                </div>
            }
        </div>
    );
};
