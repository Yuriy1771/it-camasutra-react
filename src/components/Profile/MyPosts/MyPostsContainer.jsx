import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostAC} from "../../../redux/profileReducer.ts";

let mapStateToProps = (state) => {
    return {
        state: state.profilePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => {
            dispatch(addPostAC(postText))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer