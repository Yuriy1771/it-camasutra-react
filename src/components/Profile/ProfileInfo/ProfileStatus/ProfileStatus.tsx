import React, {ChangeEvent, FC, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {updateProfileStatusThunk} from "../../../../redux/profileReducer.ts";
import {appStateType} from "../../../../redux/redux-store";

type propsType = {status:string}

const ProfileStatus:FC<propsType> = (props) => {
    const status:string = useSelector((state:appStateType) => state.profilePage.status)

    let [editMode, setEditMode] = useState<boolean>(false)
    let [newStatus, setStatus] = useState<string>(status)

    useEffect(() => {
        setStatus(status)
    }, [status])

    const dispatch = useDispatch()

    const onActivateStatus = ():void => {
        setEditMode(true)
    }
    const deactivateStatus = ():void => {
        setEditMode(false)
        dispatch(updateProfileStatusThunk(newStatus))
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