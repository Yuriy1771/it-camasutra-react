import React from 'react'
import {connect} from "react-redux";
import Header from "./Header.tsx";
import {logoutThunk, setAuthUserDataThunk} from "../../redux/authReducer.ts";
import {profileType} from "../../types/types";
import {appStateType} from "../../redux/redux-store";

type mapStatePropsType = {login: string, isAuth: boolean, profile:profileType}
type mapDispatchPropsType = {setAuthUserDataThunk: () => void, logoutThunk: () => void}
type propsType = mapStatePropsType & mapDispatchPropsType

// @ts-ignore
class HeaderContainer extends React.Component<propsType> {

    componentDidMount() {
        this.props.setAuthUserDataThunk()
    }

    render() {
        return (
            <>
                <Header {...this.props}/>
            </>
        )
    }
}

const mstp = (state):mapStatePropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        profile: state.profilePage.profile
    }
}

export default connect<mapStatePropsType, mapDispatchPropsType, appStateType>(mstp, {setAuthUserDataThunk, logoutThunk})(HeaderContainer)