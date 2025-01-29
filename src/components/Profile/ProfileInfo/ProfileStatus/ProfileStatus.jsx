import React, {useEffect, useState} from 'react'

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onActivateStatus = () => {
        setEditMode(true)
    }
    const deactivateStatus = () => {
        setEditMode(false)
        props.updateProfileStatusThunk(status)
    }

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    }


    return (
        <> {editMode
            ? <div><input type='text' autoFocus={true} onBlur={deactivateStatus} onChange={onStatusChange} value={status}/></div>
            : <div><span onDoubleClick={onActivateStatus}>{status ? props.status : 'write status'}</span></div>
        }
        </>
    )
}

export default ProfileStatus