import React from 'react'
import styles from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + ' ' + (hasError ?  styles.error : '')}>
            {hasError ? <span>{meta.error}</span> : null}
            <div className={styles.wrapperTextarea}>
                <textarea {...input} {...props}/>
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return(
        <div className={styles.formControl + ' ' + (hasError ?  styles.error : '')}>
            {hasError ? <span>{meta.error}</span> : null}
            <div>
                <input type="text" {...input} {...props}/>
            </div>
        </div>
    )
}