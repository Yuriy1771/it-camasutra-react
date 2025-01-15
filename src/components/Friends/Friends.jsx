import React from 'react'
import styles from './Friends.module.css'

const Friends = (props) => {
    if(props.state.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                name: 'Yuriy',
                status: 'I learn React',
                location: {country: 'Russia', city: 'Kazan',},
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s',
                isFollow: false,
            },
            {
                id: 2,
                name: 'Yuliana',
                status: 'I learn JS',
                location: {country: 'Russia', city: 'Kazan',},
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s',
                isFollow: true,
            },
            {
                id: 3,
                name: 'Tolya',
                status: 'I learn programming language',
                location: {country: 'Russia', city: 'Volgograd',},
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s',
                isFollow: false,
            },
        ])
    }
    return (
        <div>
            {props.state.users.map((user) => <div className={styles.userBlock} key={user.id}>
                <div className={styles.avatarAndIsFollowBlock}>
                    <div>
                        <div><img className={styles.userAvatar} src={user.avatar} alt="img"/></div>
                    </div>
                    <div className={styles.isFollowBtn}>
                        {user.isFollow
                            ? <button onClick={() => { props.follow(user.id)}} className={styles.unfollow}>unfollow</button>
                            : <button onClick={() => {props.unfollow(user.id)}} className={styles.follow}>follow</button>}
                    </div>
                </div>
                    <div className={styles.userNameBlock}>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </div>
                    <div className={styles.userLocation}>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </div>
            </div>)}
        </div>
    )
}

export default Friends