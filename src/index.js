import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

window.store = store
const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderTree = (state) => {
    root.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>
    );
}
rerenderTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderTree(state)
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();