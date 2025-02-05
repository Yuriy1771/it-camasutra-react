import React, {FC, useEffect, useState} from 'react'
import styles from './ProfileInfo.module.css'
import user_avatar_img from "../../../assets/images/user_avatar.jpeg";
import Preloader from "../../other/Preloader/Preloader.tsx";
import ProfileStatus from "./ProfileStatus/ProfileStatus.tsx";
import ProfileData from "./ProfileData/ProfileData.tsx";
import ProfileDataFormRedux from "./ProfileData/ProfileDataForm.tsx";
import {profileType} from "../../../types/types";

export type profileInfoPropsType = {profile: profileType, updateProfileStatusThunk: (status: string) => void, status: string, isOwner?: number,
                    savePhotoThunk: any, saveProfileInfoThunk:(data:string) => any}

const ProfileInfo:FC<profileInfoPropsType> = ({profile, updateProfileStatusThunk, status, isOwner, savePhotoThunk, saveProfileInfoThunk}) => {
    const [editMode, setEditMode] = useState<boolean>(false)

    if (profile == '') {
        return <><Preloader/></>

    }
    const onEditMode = ():void => {
        setEditMode(true)

    }


    const onMainPhotoSelected = (e):void => {
        if (e.target.files.length) {
            let mainPhoto = e.target.files[0]
            savePhotoThunk(mainPhoto)
        }
    }

    const onSubmit = (formData):void => {
        saveProfileInfoThunk(formData).then(
            ():void => {
                setEditMode(false)
            }
        )
    }

    return (
        <div>
            <div className={styles.wrapperInfo}>
                <div className={styles.wrapperAboutMe}>
                    <div>{profile.fullName}</div>
                    <ProfileStatus status={status} updateProfileStatusThunk={updateProfileStatusThunk}/>
                    {editMode
                        ? <ProfileDataFormRedux initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData profile={profile} saveProfileInfoThunk={saveProfileInfoThunk}
                                       isOwner={isOwner} onEditMode={onEditMode}/>}
                </div>
                <div className={styles.wrapperAvatar}>
                    <img src={profile.photos.large ? profile.photos.large : user_avatar_img}
                         className={styles.user_avatar} alt='user avatar'/>
                </div>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            </div>
        </div>
    )
}

export default ProfileInfo