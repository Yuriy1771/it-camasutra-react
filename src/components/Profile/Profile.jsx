import React from 'react'
import styles from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts  state={props.state}
                      dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile