import React from 'react'
import {connect} from "react-redux";
import Header from "./Header";
import axios from "axios";
import {setAuthUserData} from "../../redux/authReducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.getAuthDataAPI().then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
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
    }
}

export default connect(mstp, {setAuthUserData})(HeaderContainer)