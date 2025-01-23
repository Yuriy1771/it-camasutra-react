import Dialogs from "./Dialogs";
import {addMessageAC, updateNewTextMessageAC} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(addMessageAC())},
        updateNewTextMessage: (text) => {dispatch(updateNewTextMessageAC(text))},
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(Dialogs)