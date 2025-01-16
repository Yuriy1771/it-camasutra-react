import React from 'react'
import styles from './Friends.module.css'
import user_avatar from '../../assets/images/user_avatar.png'
import axios from "axios";

const Friends = (props) => {
    if (props.state.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(
                    response.data.items
                )
            })
    }
    return (
        <div>
            {props.state.users.map((user) => <div className={styles.userBlock} key={user.id}>
                <div className={styles.avatarAndIsFollowBlock}>
                    <div>
                        <div><img className={styles.userAvatar} src={user.photos.small != null
                            ? user.photos.small
                            : user_avatar} alt="img"/></div>
                    </div>
                    <div className={styles.isFollowBtn}>
                        {user.followed
                            ? <button onClick={() => {
                                props.follow(user.id)
                            }} className={styles.unfollow}>unfollow</button>
                            : <button onClick={() => {
                                props.unfollow(user.id)
                            }} className={styles.follow}>follow</button>}
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
            </div>)}
        </div>
    )
}

export default Friends