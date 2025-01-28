import React, {useState} from 'react'

const ProfileStatus = (props) => {
    // state = {
    //     editMode: false,
    //     status: this.props.status,
    // }
    // activateEditMode = () => {
    //     this.setState({editMode: true})
    // }
    // deactivateMode = (event) => {
    //     this.setState({editMode: false})
    //     this.props.updateProfileStatusThunk(this.state.status)
    // }
    // onChangeStatus = (e) => {
    //     let status = e.currentTarget.value
    //     this.setState({status: status})
    // }
    //
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status,
    //         })
    //     }
    // }

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const onActivateStatus = () => {
        setEditMode(true)
    }
    const deactivateStatus = () => {
        setEditMode(false)
        props.updateProfileStatusThunk(status)
    }

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    }


    return (
        <> {editMode
            ? <div><input type='text' autoFocus={true} onBlur={deactivateStatus} onChange={onStatusChange} value={status}/></div>
            : <div><span onDoubleClick={onActivateStatus}>{status ? props.status : 'write status'}</span></div>
        }
        </>
    )
}

export default ProfileStatus