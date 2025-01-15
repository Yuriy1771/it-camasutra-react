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
            {props.state.users.map((user) => <div key={user.id}>
                <span>
                    <div>
                        <div><img className={styles.userAvatar} src={user.avatar} alt="img"/></div>
                    </div>
                    <div>
                        {user.isFollow ? <button onClick={() => {
                            props.follow(user.id)
                        }}>unfollow</button> : <button onClick={() => {
                            props.unfollow(user.id)
                        }}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Friends