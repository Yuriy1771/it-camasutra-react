import React from 'react'
import styles from './ProfileInfo.module.css'
import user_avatar_img from "../../../images/user_avatar.jpeg";
import Preloader from "../../other/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (props.profile == '') {
        return <><Preloader/></>
    }
    return (
        <div>
            <div className={styles.wrapperInfo}>
                <div className={styles.wrapperName}>
                    <div>{props.profile.fullName}</div>
                    <div>{props.profile.aboutMe}</div>
                    <div><ProfileStatus status={'lol'}/></div>
                </div>
                <div className={styles.wrapperAvatar}>
                    <img src={props.profile.photos.large ? props.profile.photos.large : user_avatar_img}
                         className={styles.user_avatar} alt='user avatar'/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo