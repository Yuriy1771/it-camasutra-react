import React, {FC} from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post.tsx'
import AddPostForm from "./addPostForm.tsx";
import {postsType} from "../../../types/types";
import {useSelector} from "react-redux";
import {appStateType} from "../../../redux/redux-store";

type propsType = {}
const MyPosts:FC<propsType> = React.memo((props) => {

    const posts:postsType[] = useSelector((state:appStateType) => state.profilePage.posts)

    let componentPosts = posts.map((post) => {
        return <Post message={post.postMessage} likes_count={post.likesCount} key={post.id}/>
    })

    return (
        <div className={styles.myPosts}>
            <p className={styles.writePostText}>write post:</p>
            <div className={styles.posts}>
                <AddPostForm />
                <div className={styles.wrapperMyPosts}>
                <p className={styles.writePostText}>My posts:</p>
                {componentPosts}
                </div>
            </div>
        </div>
    )
});

export default MyPosts