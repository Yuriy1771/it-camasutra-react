import React from 'react'
import {connect} from "react-redux";
import Header from "./Header";
import axios from "axios";
import {setAuthUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                    console.log(response)
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