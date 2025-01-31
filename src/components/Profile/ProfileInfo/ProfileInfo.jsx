import React from 'react'
import styles from './ProfileInfo.module.css'
import user_avatar_img from "../../../assets/images/user_avatar.jpeg";
import Preloader from "../../other/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = ({profile, updateProfileStatusThunk, status, isOwner, savePhotoThunk}) => {
    if (profile == '') {
        return <><Preloader/></>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            let mainPhoto = e.target.files[0]
            savePhotoThunk(mainPhoto)
        }
    }

    return (
        <div>
            <div className={styles.wrapperInfo}>
                <div className={styles.wrapperName}>
                    <div>{profile.fullName}</div>
                    <div>{profile.aboutMe}</div>
                    <div><ProfileStatus status={status} updateProfileStatusThunk={updateProfileStatusThunk}/></div>
                </div>
                <div className={styles.wrapperAvatar}>
                    <img src={profile.photos.large ? profile.photos.large : user_avatar_img}
                         className={styles.user_avatar} alt='user avatar'/>
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo