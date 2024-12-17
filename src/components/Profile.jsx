import React from 'react'
import styles from './Profile.module.css'
import user_shapka_img from '../images/user_shapka.jpeg'
import user_avatar_img from '../images/avatar_user.jpg'

const Profile = () => {
    return (
        <div className={styles.content}>
        <div>
          <img src={user_shapka_img} className={styles.user_shapka} alt='shapka user' />
        </div>
        <div>
          <img src={user_avatar_img} className={styles.user_avatar} alt='user avatar' />
        </div>
        <div>
          my posts
          <div>
            new post
          </div>
          <div className='posts'>
            posts
            <div className='item'>post 1</div>
            <div className='item-post'>post 1</div>
            <div className='item-post'>post 1</div>
            <div className='item-post'>post 1</div>
          </div>
        </div>
      </div>
    )
}

export default Profile