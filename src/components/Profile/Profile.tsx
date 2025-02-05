import React, {FC} from 'react'
import styles from './Profile.module.css'
import ProfileInfo, {profileInfoPropsType} from "./ProfileInfo/ProfileInfo.tsx";
import MyPostsContainer from "./MyPosts/MyPostsContainer.tsx";

type propsType = profileInfoPropsType
const Profile:FC<propsType> = ({profile, updateProfileStatusThunk, status, isOwner, savePhotoThunk, saveProfileInfoThunk}) => {
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