import React, {FC} from 'react'

type propsType = {contactTitle: any, contactValue: any}

const ProfileContacts:FC<propsType> = ({contactTitle, contactValue}) => {
    return (
        <div>
            <div><b>{contactTitle}</b> : {contactValue}</div>
        </div>
    )
}
export default ProfileContacts