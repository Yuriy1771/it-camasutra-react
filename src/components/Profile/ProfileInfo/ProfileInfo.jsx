import React from 'react'
import styles from './ProfileInfo.module.css'
import user_shapka_img from "../../../images/user_shapka.jpeg";
import user_avatar_img from "../../../images/user_avatar.jpeg";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src={user_shapka_img} className={styles.user_shapka} alt='shapka user'/>
            </div>
            <div className={styles.descriptionBlock}>
                <img src={user_avatar_img} className={styles.user_avatar} alt='user avatar'/>
            </div>
        </div>
    )
}

export default ProfileInfo