import React from 'react'
import {connect} from "react-redux";
import Header from "./Header";
import {logoutThunk, setAuthUserDataThunk} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

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

const mstp = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        profile: state.profilePage.profile
    }
}

export default connect(mstp, {setAuthUserDataThunk, logoutThunk})(HeaderContainer)