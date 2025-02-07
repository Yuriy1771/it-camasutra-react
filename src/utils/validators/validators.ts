export type fieldValidatorType = (value:string) => string | undefined

export const required:fieldValidatorType = (value) => {
    if(value) return undefined

    return 'field is required'
}

export const maxLengthCreator = (maxLength:number):fieldValidatorType => (value) => {
    if(value.length > maxLength) return `Max length is more ${maxLength} symbols`

    return undefined
}