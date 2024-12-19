import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let componentPosts = props.state.posts.map((post) => {
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