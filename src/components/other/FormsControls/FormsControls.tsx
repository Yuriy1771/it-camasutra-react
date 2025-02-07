import React, {FC} from 'react'
import styles from './FormsControls.module.css'
import {Field, WrappedFieldProps} from "redux-form";

export const Textarea: FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            {hasError ? <span>{meta.error}</span> : null}
            <div className={styles.wrapperTextarea}>
                <textarea {...input} {...props}/>
            </div>
        </div>
    )
}

export const Input: FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            {hasError ? <span>{meta.error}</span> : null}
            <div>
                <input type="text" {...input} {...props}/>
            </div>
        </div>
    )
}

export function createField<FormKeysType extends string>(placeholder: string | undefined = '', name: FormKeysType, component: FC<WrappedFieldProps>, required: any,
                            maxLength: any = 0, type: string = '', text: string = '') {
    return(
        <div>
            <Field placeholder={placeholder} name={name} component={component} validate={[required, maxLength]}
                   type={type}/>
            {text}
        </div>
    )
}