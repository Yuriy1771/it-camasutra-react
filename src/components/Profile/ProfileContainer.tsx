import React from 'react'
import Profile from "./Profile.tsx";
import {connect} from "react-redux";
import {
    getProfileAPIThunk,
    getProfileStatusThunk, savePhotoThunk, saveProfileInfoThunk, updateProfileStatusThunk,
} from "../../redux/profileReducer.ts";
import {useParams} from "react-router";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect.jsx";
import {compose} from "redux";
import {profileType} from "../../types/types";
import {appStateType} from "../../redux/redux-store";

//26083 my id
type mapStatePropsType = {profile: profileType, status: string, authorizedMyUserId: number, isAuth: boolean}
type mapDispatchPropsType = {updateProfileStatusThunk: (status:string) => void, getProfileStatusThunk: (id:number) => void,
                                getProfileAPIThunk:(id: number) => void, savePhotoThunk: (mainPhoto: any) => void,
                                saveProfileInfoThunk:(data:string) => void}
type propsType = mapStatePropsType & mapDispatchPropsType
//@ts-ignore
class ProfileContainer extends React.Component<propsType> {

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
                     savePhotoThunk={this.props.savePhotoThunk} saveProfileInfoThunk={this.props.saveProfileInfoThunk}
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
    connect<mapStatePropsType, mapDispatchPropsType, appStateType>(mapStateToProps, {
        updateProfileStatusThunk,
        getProfileStatusThunk,
        getProfileAPIThunk,
        savePhotoThunk,
        saveProfileInfoThunk,
    }),
    WithAuthRedirect,
)(GetParams)