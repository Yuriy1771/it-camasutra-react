import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileAPIThunk,
    getProfileStatusThunk, updateProfileStatusThunk,
} from "../../redux/profileReducer";
import {useParams} from "react-router";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";

//26083 my id
class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.param.userId
        if (!userId) userId = 26083
        this.props.getProfileAPIThunk(userId)
        this.props.getProfileStatusThunk(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateProfileStatusThunk={this.props.updateProfileStatusThunk}/>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
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
    }),
    WithAuthRedirect,
)(GetParams)