import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className={styles.myPosts}>
      write post:
      <div className={styles.posts}>
        <textarea></textarea>
        <div className={styles.button}>
          <button>send</button>
        </div>
        <span>My posts:</span>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default MyPosts