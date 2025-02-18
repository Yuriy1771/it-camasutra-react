import {chatMessageType} from "../pages/Chat/Chat.tsx";

type subscribeType = (message:chatMessageType[]) => void

let subscribers = [] as subscribeType[]

let ws: WebSocket | null = null
const closeHandler = () => {
    setTimeout(createChannel, 3000)
}

const messageHandler = (e) => {
    const newMessages = JSON.parse(e.data)
    subscribers.forEach((s) => s(newMessages))
}

const createChannel = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws?.addEventListener('close', closeHandler)
    ws?.addEventListener('message', messageHandler)
}

export const chatAPI = {
    start() {
        createChannel()
    },
    stop() {
        subscribers = []
        ws?.removeEventListener('close', closeHandler)
        ws?.removeEventListener('message', messageHandler)
        ws?.close()
    },
    subscribers(callback: subscribeType) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter((s) => s!== callback)
        }
    },
    unSubscribe(callback:subscribeType) {
        subscribers = subscribers.filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}