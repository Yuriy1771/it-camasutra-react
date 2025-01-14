import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostAC, updateNewTextPostAC} from "../../../redux/profileReducer";

let mapStateToProps = (state) => {
    return {
        state: state.profilePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewTextPostAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer