import React, {useEffect, useState} from 'react'
import styles from './ProfileInfo.module.css'
import user_avatar_img from "../../../assets/images/user_avatar.jpeg";
import Preloader from "../../other/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataFormRedux from "./ProfileData/ProfileDataForm";

const ProfileInfo = ({profile, updateProfileStatusThunk, status, isOwner, savePhotoThunk, saveProfileInfoThunk}) => {
    const [editMode, setEditMode] = useState(false)

    if (profile == '') {
        return <><Preloader/></>

    }
    const onEditMode = () => {
        setEditMode(true)

    }


    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            let mainPhoto = e.target.files[0]
            savePhotoThunk(mainPhoto)
        }
    }

    const onSubmit = (formData) => {
        saveProfileInfoThunk(formData).then(
            () => {
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