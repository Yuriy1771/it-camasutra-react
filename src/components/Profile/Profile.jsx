import React from 'react'
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo profile={props.profile} updateProfileStatusThunk={props.updateProfileStatusThunk} status={props.status}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile