import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }
    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateMode = () => {
        this.setState({editMode: false})
    }
    render() {
        return (
            <>
                {this.state.editMode
                    ? <div><input autoFocus={true} onBlur={this.deactivateMode} type='text' value={this.props.status}/></div>
                    :  <div><span onDoubleClick={this.activateEditMode}>{this.props.status}</span></div>}
            </>
        )
    }
}

export default ProfileStatus