import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer.ts";
import dialogsReducer from "./dialogsReducer.ts";
import friendsReducer from "./friendsReducer.ts";
import authReducer from "./authReducer.ts";
import {thunk} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import chatReducer from "./chat-reducer.ts";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    auth: authReducer,
    form: formReducer,
    chatPage: chatReducer,
})

type rootReducerType = typeof rootReducer
export type appStateType = ReturnType<rootReducerType>

type propertiesTypes<T> = T extends {[key: string]:infer U} ? U : never
export type inferActionsTypes<T extends {[key: string]:(...args: any[]) => any}> = ReturnType<propertiesTypes<T>>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// let store = createStore(reducers, applyMiddleware(thunk))

export default store