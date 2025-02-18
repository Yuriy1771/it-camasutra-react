import {chatMessageType} from "../pages/Chat/Chat.tsx";

export type statusType = 'pending' | 'ready' | 'error'

type subscribeType = (message:chatMessageType[]) => void
type statusChangedSubscriberType = (status:statusType) => void
type eventsType = 'message-received' | 'status-changed'

const subscribers = {
    'message-received': [] as subscribeType,
    'status-changed': [] as statusChangedSubscriberType
}

let ws: WebSocket | null = null
const closeHandler = () => {
    notifySubscribersAboutStatus('pending')
    setTimeout(createChannel, 3000)
}

const messageHandler = (e) => {
    const newMessages = JSON.parse(e.data)
    subscribers['message-received'].forEach((s) => s(newMessages))
}

const openHandler = () => {
    notifySubscribersAboutStatus('ready')
}

const errorHandler = () => {
    notifySubscribersAboutStatus('error')
}

const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)
}

const notifySubscribersAboutStatus = (status:statusType) => {
    subscribers['status-changed'].forEach(s => s(status))
}

const createChannel = () => {
    cleanUp()
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifySubscribersAboutStatus('pending')
    ws?.addEventListener('close', closeHandler)
    ws?.addEventListener('message', messageHandler)
    ws?.addEventListener('open', openHandler)
    ws?.addEventListener('error', errorHandler)
}

export const chatAPI = {
    start() {
        createChannel()
    },
    stop() {
        subscribers['message-received'] = []
        subscribers['status-changed'] = []
        cleanUp()
        ws?.close()
    },
    subscribers(eventName:eventsType, callback: subscribeType | statusChangedSubscriberType) {
        subscribers[eventName].push(callback)
        return () => {
            subscribers[eventName] = subscribers[eventName].filter((s) => s!== callback)
        }
    },
    unSubscribe(eventName:eventsType, callback:subscribeType | statusChangedSubscriberType) {
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}