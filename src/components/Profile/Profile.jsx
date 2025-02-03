import React from 'react'
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, updateProfileStatusThunk, status, isOwner, savePhotoThunk, saveProfileInfoThunk}) => {
    return (
        <div className={styles.content}>
            <ProfileInfo profile={profile} updateProfileStatusThunk={updateProfileStatusThunk}
                         status={status} isOwner={isOwner} savePhotoThunk={savePhotoThunk}
                         saveProfileInfoThunk={saveProfileInfoThunk}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile