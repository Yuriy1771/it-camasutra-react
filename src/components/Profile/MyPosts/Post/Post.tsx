import React, {FC} from 'react'
import styles from './Post.module.css'
import post_user_avatar from '../../../../assets/images/user_avatar.jpeg'
import like_post_img from '../../../../assets/images/like_post.png'

type propsType = {message: string, likes_count:number}

const Post:FC<propsType> = ({message, likes_count}) => {
    return (
        <div className={styles.item_post}>
            <img src={post_user_avatar} className={styles.post_user_avatar} alt="post_user_avatar" />
            <span className={styles.post_text}>{message}</span>
            <div className={styles.like_post}>
                <img src={like_post_img} alt="like_post" />
                <span>{likes_count}</span>
            </div>
        </div>
    )
}

export default Post