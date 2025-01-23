import React from 'react'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getProfileAPIThunk, setUserProfile} from "../../redux/profileReducer";
import {useParams} from "react-router";
import {profileAPI} from "../../api/api";
import {Navigate} from "react-router-dom";

//26083 my id
class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.param.userId
        if (!userId) userId = 26083
        this.props.getProfileAPIThunk(userId)
    }

    render() {
        if (!this.props.isAuth) return <Navigate to={'/login'}/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
}

const GetParams = (props) => {
    return <ProfileContainer {...props} param={useParams()}/>
}

export default connect(mapStateToProps, {
    setUserProfile,
    getProfileAPIThunk,
})(GetParams)