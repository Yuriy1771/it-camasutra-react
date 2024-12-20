import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let componentPosts = props.state.posts.map((post) => {
        return <Post message={post.postMessage} likes_count={post.likesCount}/>
    })
    let newPostRef = React.createRef()
    let addPost = () => {
        let textOfTextArea = newPostRef.current.value
        props.addPost(textOfTextArea)
        newPostRef.current.value = ''
    }
    return (
        <div className={styles.myPosts}>
            write post:
            <div className={styles.posts}>
                <textarea ref={newPostRef}></textarea>
                <div className={styles.button}>
                    <button onClick={addPost}>add post</button>
                </div>
                <span>My posts:</span>
                {componentPosts}
            </div>
        </div>
    )
}

export default MyPosts