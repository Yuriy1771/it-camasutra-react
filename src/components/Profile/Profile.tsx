import React, {FC} from 'react'
import styles from './Profile.module.css'
import ProfileInfo, {profileInfoPropsType} from "./ProfileInfo/ProfileInfo.tsx";
import MyPostsContainer from "./MyPosts/MyPostsContainer.tsx";

type propsType = profileInfoPropsType
const Profile:FC<propsType> = ({isOwner, saveProfileInfoThunk}) => {


    return (
        <div className={styles.content}>
            <ProfileInfo isOwner={isOwner} saveProfileInfoThunk={saveProfileInfoThunk}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile