import React, {useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)
    console.log(status)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {editMode
                ? <div>
                    <input
                        autoFocus
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
