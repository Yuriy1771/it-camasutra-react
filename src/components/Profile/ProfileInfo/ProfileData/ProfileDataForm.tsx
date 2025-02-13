import {Input, Textarea} from "../../../other/FormsControls/FormsControls.tsx";
import React, {FC} from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators.ts";
import styles from "./ProfileDataForm.module.css";
import {profileType} from "../../../../types/types";

type propsType = {handleSubmit:(formData: string) => void, profile:profileType, error:string}
const ProfileDataForm:FC<propsType> = ({handleSubmit, profile, error}) => {
    const maxLength = maxLengthCreator(50)
    return (
        <form onSubmit={handleSubmit}>
            <button className={styles.saveBtn}>Save information</button>
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div className={styles.itemAboutMe}>
                <b>Full name : </b><Field component={Input} placeholder='full name' name='fullName' validate={[required, maxLength]}/>
            </div>
            <div className={styles.itemAboutMe}>
                <b>About me : </b><Field component={Input} placeholder='about me' name='aboutMe' validate={[required, maxLength]}/>
            </div>
            <div className={styles.itemAboutMeCheckbox}>
                <b>Looking for a job : </b><Field component={Input} type='checkbox' name='lookingForAJob' validate={[required, maxLength]}/>
            </div>
            <div className={styles.itemAboutMe}>
                <b>Information : </b><Field component={Textarea} type='checkbox' placeholder={'Information'} name='lookingForAJobDescription' validate={[required, maxLength]}/>
            </div>
            <div>
                <b>Contacts</b> : {Object.keys(profile.contacts)//return array from object contact
                .map((contact) => {
                    return <div key={contact} className={styles.itemContact}>
                        <b>{contact}:</b><Field component={Input} placeholder={contact} type='text' name={'contacts.' + contact}/>
                    </div>
                })}
            </div>
        </form>
    )
}

const ProfileDataFormRedux = reduxForm({form: 'editProfile', destroyOnUnmount: false})(ProfileDataForm)

export default ProfileDataFormRedux
