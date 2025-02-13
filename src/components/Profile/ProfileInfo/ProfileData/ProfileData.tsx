import ProfileContacts from "./ProfileContacts.tsx";
import React, {FC, useState} from "react";
import {profileType} from "../../../../types/types";
import styles from '../ProfileInfo.module.css'

type propsType = { profile: profileType, isOwner: number, onEditMode: (setEditMode: boolean) => void }

const ProfileData: FC<propsType> = ({profile, isOwner, onEditMode}) => {

    const [show, setShow] = useState(false)
    const [textBtn, setTextBtn] = useState('show more')

    const onShow = () => {
        if (show) {
            setShow(false)
            setTextBtn('show more')
            return
        }
        setShow(true)
        setTextBtn('show less')

    }

    return (
        <div className={styles.wrapperAboutMeAndContacts}>
            <div className={styles.aboutMe}>
                {isOwner && <div>
                    <button onClick={onEditMode}>Edit</button>
                </div>}
                <div>
                    <b>About me : </b>{profile.aboutMe}
                </div>
                <div>
                    <b>Looking for a job : </b>{profile.lookingForAJob ? 'yes' : 'no'}
                </div>
                <div>
                    <b>Information : </b>{profile.lookingForAJobDescription}
                </div>
            </div>
            <span><button onClick={onShow} className={styles.showMoreBtn}>{textBtn}</button></span>
            {show &&
                <div className={styles.contacts}>
                    <b>Contacts</b> : {Object.keys(profile.contacts)//return array from object contact
                    .map((contact) => <ProfileContacts profile={profile} contactTitle={contact}
                                                       contactValue={profile.contacts[contact]} key={contact}/>)}
                </div>}
        </div>
    )
}

export default ProfileData