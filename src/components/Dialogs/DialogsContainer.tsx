import Dialogs from "./Dialogs.tsx";
import {addMessageAC} from "../../redux/dialogsReducer.ts";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect.jsx";
import {compose} from "redux";
import {dialogsType, messagesType} from "../../types/types";
import {appStateType} from "../../redux/redux-store";

type mapStatePropsType = {dialogs: dialogsType, messages: messagesType}
type mapDispatchPropsType = {addMessage: (messageText: string) => void}

let mapStateToProps = (state):mapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}

let mapDispatchToProps = (dispatch):mapDispatchPropsType => {
    return {
        addMessage: (messageText) => {dispatch(addMessageAC(messageText))},
    }
}


export default compose(
    connect <mapStatePropsType,mapStatePropsType, appStateType>(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(Dialogs)