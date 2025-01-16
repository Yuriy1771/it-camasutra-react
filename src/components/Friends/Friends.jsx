import React from 'react'
import styles from './Friends.module.css'
import user_avatar from '../../assets/images/user_avatar.png'
import axios from "axios";

class Friends extends React.Component {

    constructor(props) {
        super(props)
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(
                    response.data.items
                )
            })
    }
    render() {
        return (
            <div>
                {this.props.state.users.map((user) => <div className={styles.userBlock} key={user.id}>
                    <div className={styles.avatarAndIsFollowBlock}>
                        <div>
                            <div><img className={styles.userAvatar} src={user.photos.small != null
                                ? user.photos.small
                                : user_avatar} alt="img"/></div>
                        </div>
                        <div className={styles.isFollowBtn}>
                            {user.followed
                                ? <button onClick={() => {
                                    this.props.follow(user.id)
                                }} className={styles.unfollow}>unfollow</button>
                                : <button onClick={() => {
                                    this.props.unfollow(user.id)
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
}

export default Friends