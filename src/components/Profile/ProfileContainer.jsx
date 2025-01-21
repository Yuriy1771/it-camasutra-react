import React from 'react'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";

//26083 my id
class ProfileContainer extends React.Component {
    componentDidMount() {
        let defaultUrl = this.props.clickedUserOpen === 0 ? 26083 : this.props.clickedUserOpen
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${defaultUrl}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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
        clickedUserOpen: state.friendsPage.clickUserId,
    }
}

export default connect(mapStateToProps, {
    setUserProfile,
})(ProfileContainer)