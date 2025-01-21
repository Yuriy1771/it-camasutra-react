import React from 'react'
import styles from "./Friends.module.css";
import user_avatar from "../../assets/images/user_avatar.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Friends = (props) => {
    let pagesCount = Math.ceil(props.state.totalUsersCount / props.state.countUsersOfPage)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    const onClickFollow = (id) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {
                "API-KEY" : '1d9719b2-4c93-4cca-b827-f6e8e5eb5596',
            },
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    props.follow(id)
                }
            })
    }

    const onClickUnfollow = (id) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY" : '1d9719b2-4c93-4cca-b827-f6e8e5eb5596',
            },
        })
            .then(response => {
                console.log(response)
                if (response.data.resultCode === 0) {
                    props.unfollow(id)
                }
            })

    }

    return (
        <div>
            {props.state.users.map((user) => <div className={styles.userBlock} key={user.id}>
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
                            <button onClick={() => onClickFollow(user.id)} className={styles.unfollow}>unfollow</button>
                            :
                            <button onClick={() => onClickUnfollow(user.id)} className={styles.follow}>follow</button>}
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
            <div className={styles.pagination}>
                {pages.map((page) => <div onClick={() => props.onCurrentPageClick(page)}
                                          className={props.state.currentPage === page ? styles.selectedPage : styles.numberPage}>{page}</div>)}
            </div>
        </div>
    )
}

export default Friends