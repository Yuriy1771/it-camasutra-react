import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let posts = [
        {id: 1, postMessage: 'Hi, how are you?', likes_count: 5, userAvatar: '',},
        {id: 2, postMessage: 'Why doesn\'t my friend answer me?', likes_count: 10, userAvatar: '',},
    ]
  return (
    <div className={styles.myPosts}>
      write post:
      <div className={styles.posts}>
        <textarea></textarea>
        <div className={styles.button}>
          <button>send</button>
        </div>
        <span>My posts:</span>
        <Post message={posts[0].postMessage} likes_count={posts[0].likes_count} />
        <Post message={posts[1].postMessage} likes_count={posts[1].likes_count} />
      </div>
    </div>
  )
}

export default MyPosts