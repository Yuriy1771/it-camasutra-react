import ProfileContacts from "./ProfileContacts";
import React from "react";

const ProfileData = ({profile, getVkThunk, isOwner, onEditMode}) => {
    return (
        <div>
            {isOwner && <div><button onClick={onEditMode}>Edit</button></div>}
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
                .map((contact) => <ProfileContacts profile={profile} getVkThunk={getVkThunk}
                                                   contactTitle={contact} contactValue={profile.contacts[contact]}
                                                   key={contact}/>)}
            </div>
        </div>
    )
}

export default ProfileData