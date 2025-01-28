import React from 'react'
import styles from "./Friends.module.css";
import user_avatar from "../../assets/images/user_avatar.png";
import {NavLink} from "react-router-dom";

const Friends = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.countUsersOfPage)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    const onClickFollow = (id) => {
        props.followThunk(id)
    }

    const onClickUnfollow = (id) => {
        props.unfollowThunk(id)
    }

    return (
        <div>
            {props.users.map((user) => <div className={styles.userBlock} key={user.id}>
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
                            <button disabled={props.isDisabledFollow.some(id => id === user.id)}
                                    onClick={() => onClickFollow(user.id)} className={styles.unfollow}>unfollow</button>
                            :
                            <button disabled={props.isDisabledFollow.some(id => id === user.id)}
                                    onClick={() => onClickUnfollow(user.id)} className={styles.follow}>follow</button>}
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
                                          className={props.currentPage === page ? styles.selectedPage : styles.numberPage}>{page}</div>)}
            </div>
        </div>
    )
}

export default Friends