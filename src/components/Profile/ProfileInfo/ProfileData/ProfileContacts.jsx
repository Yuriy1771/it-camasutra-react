import React, {useState} from 'react'

// const ProfileContacts = ({profile, getVkThunk}) => {
//
//     // const [activeGitHub, setActiveGitHub] = useState(false)
//     // const [activeVk, setActiveVk] = useState(false)
//     //
//     // const [gitHub, setGitHub] = useState('')
//     // const [vk, setVk] = useState('')
//     //
//     // const onActivateInputGit = () => {
//     //     setActiveGitHub(true)
//     // }
//     //
//     // const onActivateInputVk = () => {
//     //     setActiveVk(true)
//     // }
//     //
//     // const onDeactivateGit = () => {
//     //     setActiveGitHub(false)
//     // }
//     //
//     // const onDeactivateVk = () => {
//     //     setActiveVk(false)
//     //     getVkThunk(vk)
//     // }
//     //
//     // const onChangeVk = (e) => {
//     //     setVk(e.currentTarget.value)
//     // }
//     //
//     // const onChangeGit = (e) => {
//     //
//     // }
//
//     return (
//         <div>
//             <div>
//                 <span onDoubleClick={onActivateInputGit}>my gitHub: </span>
//                 {profile.github || activeGitHub &&
//                     <input autoFocus={true} onBlur={onDeactivateGit} onChange={onChangeGit}/>}
//             </div>
//             <div>
//                 <span onDoubleClick={onActivateInputVk}>my vk: </span>
//                 {profile.vk || activeVk &&
//                     <input autoFocus={true} onBlur={onDeactivateVk} onChange={onChangeVk}/>}
//             </div>
//         </div>
//     )
// }


const ProfileContacts = ({contactTitle, contactValue}) => {
    return (
        <div>
            <div><b>{contactTitle}</b> : {contactValue}</div>
        </div>
    )
}
export default ProfileContacts