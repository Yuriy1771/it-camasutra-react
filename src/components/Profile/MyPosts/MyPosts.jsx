import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  return (
    <div className={styles.myPosts}>
      write post:
      <div className={styles.posts}>
        <textarea></textarea>
        <div className={styles.button}>
          <button>send</button>
        </div>
        <span>My posts:</span>
        <Post message='Hi, how are you?' like_counts='5' />
        <Post message="Why doesn't my friend answer me?" like_counts='10' />
      </div>
    </div>
  )
}

export default MyPosts