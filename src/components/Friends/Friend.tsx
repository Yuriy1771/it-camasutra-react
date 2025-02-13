import React, {FC} from 'react'
import styles from "./Friends.module.css";
import {NavLink} from "react-router-dom";
import user_avatar from "../../assets/images/userAvatar3.png";
import {usersType} from "../../types/types";

type friendType = {user: usersType, isDisabledFollow:number[], follow:(id:number) => void, unfollow:(id:number) => void}
const Friend:FC<friendType> = ({user, isDisabledFollow, follow, unfollow}) => {
    const onClickFollow = (id):void => {
        follow(id)
    }

    const onClickUnfollow = (id):void => {
        unfollow(id)
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