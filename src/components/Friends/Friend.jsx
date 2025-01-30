import React from 'react'
import styles from "./Friends.module.css";
import {NavLink} from "react-router-dom";
import user_avatar from "../../assets/images/user_avatar.png";

const Friend = ({user, isDisabledFollow, followThunk, unfollowThunk}) => {
    const onClickFollow = (id) => {
        followThunk(id)
    }

    const onClickUnfollow = (id) => {
        unfollowThunk(id)
    }
    return (
        <div className={styles.userBlock}>
                <div className={styles.avatarAndIsFollowBlock}>
                    <div>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img className={styles.userAvatar} src={user.photos.small != null
                                    ? user.photos.small
                                    : user_avatar} alt="img"/>
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.isFollowBtn}>
                        {user.followed
                            ?
                            <button disabled={isDisabledFollow.some(id => id === user.id)}
                                    onClick={() => onClickUnfollow(user.id)} className={styles.unfollow}>unfollow</button>
                            :
                            <button disabled={isDisabledFollow.some(id => id === user.id)}
                                    onClick={() => onClickFollow(user.id)} className={styles.follow}>follow</button>}
                    </div>
                </div>
                <div className={styles.userNameBlock}>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div className={styles.userLocation}>
                    <div>Russia</div>
                    <div>Kazan</div>
                </div>
        </div>
    )
}

export default Friend