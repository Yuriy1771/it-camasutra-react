import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileAPIThunk,
    getProfileStatusThunk, savePhotoThunk, updateProfileStatusThunk,
} from "../../redux/profileReducer";
import {useParams} from "react-router";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";

//26083 my id
class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.param.userId
        if (!userId && this.props.isAuth) userId = this.props.authorizedMyUserId
        this.props.getProfileAPIThunk(userId)
        this.props.getProfileStatusThunk(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.param.userId !== prevProps.param.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateProfileStatusThunk={this.props.updateProfileStatusThunk} isOwner={!this.props.param.userId}
                     savePhotoThunk={this.props.savePhotoThunk}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedMyUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}

const GetParams = (props) => {
    return <ProfileContainer {...props} param={useParams()}/>
}

export default compose(
    connect(mapStateToProps, {
        updateProfileStatusThunk,
        getProfileStatusThunk,
        getProfileAPIThunk,
        savePhotoThunk,
    }),
    WithAuthRedirect,
)(GetParams)