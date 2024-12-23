import React from 'react'
import styles from './Post.module.css'
import post_user_avatar from '../../../../images/user_avatar.jpeg'
import like_post_img from '../../../../images/like_post.png'
const Post = (props) => {
    return (
        <div className={styles.item_post}>
            <img src={post_user_avatar} className={styles.post_user_avatar} alt="post_user_avatar" />
            <span className={styles.post_text}>{props.message}</span>
            <div className={styles.like_post}>
                <img src={like_post_img} alt="like_post" />
                <span>{props.likes_count}</span>
            </div>
        </div>
    )
}

export default Post