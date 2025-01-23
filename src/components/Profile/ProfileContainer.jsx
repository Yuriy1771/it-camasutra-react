import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileAPIThunk, setUserProfile} from "../../redux/profileReducer";
import {useParams} from "react-router";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";

//26083 my id
class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.param.userId
        if (!userId) userId = 26083
        this.props.getProfileAPIThunk(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

const GetParams = (props) => {
    return <ProfileContainer {...props} param={useParams()}/>
}

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        getProfileAPIThunk,
    }),
    WithAuthRedirect,
)(GetParams)
