import Dialogs from "./Dialogs";
import {addMessageAC, updateNewTextMessageAC} from "../../redux/dialogsReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(addMessageAC())},
        updateNewTextMessage: (text) => {dispatch(updateNewTextMessageAC(text))},
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer