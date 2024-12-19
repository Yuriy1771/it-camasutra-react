import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let posts = [
        {id: 1, postMessage: 'Hi, how are you?', likes_count: 5, userAvatar: '',},
        {id: 2, postMessage: 'Why doesn\'t my friend answer me?', likes_count: 10, userAvatar: '',},
    ]

    let componentPosts = posts.map((post) => {
        return <Post message={post.postMessage} likes_count={post.likes_count}/>
    })

    return (
        <div className={styles.myPosts}>
            write post:
            <div className={styles.posts}>
                <textarea></textarea>
                <div className={styles.button}>
                    <button>send</button>
                </div>
                <span>My posts:</span>
                {componentPosts}
            </div>
        </div>
    )
}

export default MyPosts