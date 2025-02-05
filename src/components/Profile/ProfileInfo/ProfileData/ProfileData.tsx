import ProfileContacts from "./ProfileContacts.tsx";
import React, {FC} from "react";
import {profileType} from "../../../../types/types";

type propsType = { profile: profileType, isOwner:number, onEditMode:(setEditMode:boolean) => void}

const ProfileData:FC<propsType> = ({profile, isOwner, onEditMode}) => {
    return (
        <div>
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
            <div>
                <b>Contacts</b> : {Object.keys(profile.contacts)//return array from object contact
                .map((contact) => <ProfileContacts profile={profile} contactTitle={contact}
                                                   contactValue={profile.contacts[contact]} key={contact}/>)}
            </div>
        </div>
    )
}

export default ProfileData