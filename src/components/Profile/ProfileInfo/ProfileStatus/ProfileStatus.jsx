import React from 'react'
import {updateProfileStatusThunk} from "../../../../redux/profileReducer";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }
    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateMode = (event) => {
        this.setState({editMode: false})
        this.props.updateProfileStatusThunk(this.state.status)
    }
    onChangeStatus = (e) => {
        let status = e.currentTarget.value
        this.setState({status: status})
    }

    render() {
        return (
            <>
                {this.state.editMode
                    ? <div>
                        <input autoFocus={true} onChange={this.onChangeStatus}
                               onBlur={this.deactivateMode} type='text' value={this.state.status}/>
                    </div>
                    : <div><span onDoubleClick={this.activateEditMode}>{this.props.status || 'change status'}</span></div>}
            </>
        )
    }
}

export default ProfileStatus