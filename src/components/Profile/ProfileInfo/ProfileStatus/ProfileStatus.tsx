import React, {ChangeEvent, FC, useEffect, useState} from 'react'

type propsType = {status:string, updateProfileStatusThunk: (status: string) => void}

const ProfileStatus:FC<propsType> = ({status, updateProfileStatusThunk}) => {

    let [editMode, setEditMode] = useState<boolean>(false)
    let [newStatus, setStatus] = useState<string>(status)

    useEffect(() => {
        setStatus(status)
    }, [status])

    const onActivateStatus = ():void => {
        setEditMode(true)
    }
    const deactivateStatus = ():void => {
        setEditMode(false)
        updateProfileStatusThunk(newStatus)
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>):void => {
        setStatus(event.currentTarget.value)
    }


    return (
        <div> {editMode
            ? <div><input type='text' autoFocus={true} onBlur={deactivateStatus} onChange={onStatusChange} value={newStatus}/></div>
            : <div><span onDoubleClick={onActivateStatus}>{status ? status : 'write status'}</span></div>
        }
        </div>
    )
}

export default ProfileStatus