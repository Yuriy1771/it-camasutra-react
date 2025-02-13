import React, {FC, useState} from 'react'
import styles from './ProfileInfo.module.css'
import user_avatar_img from "../../../assets/images/user_avatar.jpeg";
import Preloader from "../../other/Preloader/Preloader.tsx";
import ProfileStatus from "./ProfileStatus/ProfileStatus.tsx";
import ProfileData from "./ProfileData/ProfileData.tsx";
import ProfileDataFormRedux from "./ProfileData/ProfileDataForm.tsx";
import {profileType} from "../../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {appStateType} from "../../../redux/redux-store";
import {savePhotoThunk} from "../../../redux/profileReducer.ts";

export type profileInfoPropsType = { isOwner: number | null, saveProfileInfoThunk: (data: string) => any }

const ProfileInfo: FC<profileInfoPropsType> = ({isOwner, saveProfileInfoThunk}) => {
    const profile: profileType = useSelector((state: appStateType) => state.profilePage.profile)

    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState<boolean>(false)


    if (profile == '') {
        return <><Preloader/></>

    }
    const onEditMode = (): void => {
        setEditMode(true)
    }


    const onMainPhotoSelected = (e): void => {
        if (e.target.files.length) {
            let mainPhoto = e.target.files[0]
            dispatch(savePhotoThunk(mainPhoto))
        }
    }

    const onSubmit = (formData): void => {
        saveProfileInfoThunk(formData).then(
            (): void => {
                setEditMode(false)
            }
        )
    }

    return (
        <div>
            <div className={styles.wrapperInfo}>
                <div className={styles.wrapperAboutMe}>
                    <div className={styles.name}>{profile.fullName}</div>
                    <ProfileStatus/>
                    {editMode
                        ? <ProfileDataFormRedux initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData profile={profile} isOwner={isOwner} onEditMode={onEditMode}/>}
                </div>
                <div className={styles.wrapperAvatar}>
                    <img src={profile.photos.large ? profile.photos.large : user_avatar_img}
                         className={styles.user_avatar} alt='user avatar'/>
                    <div>
                    {isOwner &&
                        <input className={styles.changeAvatarBtn} type={'file'} onChange={onMainPhotoSelected}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo