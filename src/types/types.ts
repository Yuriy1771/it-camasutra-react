export type postsType = {id: number, postMessage: string, likesCount: number, useAvatar: string}

export type contactsType = {github: string, vk: string, facebook: string, instagram: string, twitter: string, website: string,
    youtube:string, mainLink: string}

export type photosType = {small: string | null, large: string | null}

export type profileType = {userId: number, lookingForAJob: boolean, lookingForAJobDescription: string, fullName: string,
    contacts: contactsType, photos: photosType}

export type usersType = {name: string, id: number, photos: photosType, status: string, followed: boolean}

export type dialogsType = {id: number, name: string }

export type messagesType = {id: number, message: string}