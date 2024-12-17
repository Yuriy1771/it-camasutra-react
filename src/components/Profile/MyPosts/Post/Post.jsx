import React from 'react'
import styles from './Post.module.css'
import post_user_avatar from '../../../../images/post_user_avatar.jpeg'

const Post = () => {
    return (
        <div className={styles.item_post}>
            <img src={post_user_avatar} className={styles.post_user_avatar} alt="post_user_avatar" />
            <span className={styles.post_text}>Why doesn't my friend answer me? </span>
        </div>
    )
}

export default Post