import React, {FC} from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post.tsx'
import AddPostForm from "./addPostForm.tsx";
import {reduxForm} from "redux-form";
import {postsType} from "../../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {appStateType} from "../../../redux/redux-store";
import {addPostAC} from "../../../redux/profileReducer.ts";

type propsType = {}
const AddPostFormRedux = reduxForm({form: 'newTextPost'})(AddPostForm)

const MyPosts:FC<propsType> = React.memo((props) => {

    const posts:postsType[] = useSelector((state:appStateType) => state.profilePage.posts)
    const dispatch = useDispatch()

    let componentPosts = posts.map((post) => {
        return <Post message={post.postMessage} likes_count={post.likesCount} key={post.id}/>
    })

    const onSubmit = (formData):void => {
        dispatch(addPostAC(formData.newTextPost))
    }
    return (
        <div className={styles.myPosts}>
            write post:
            <div className={styles.posts}>
                <AddPostFormRedux onSubmit={onSubmit}/>
                <span>My posts:</span>
                {componentPosts}
            </div>
        </div>
    )
});

export default MyPosts