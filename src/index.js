import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

window.store = store
const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderTree = (state = store.getState()) => {
    root.render(
        <React.StrictMode>
            <App
                // state={state}
                store={store}
            />
        </React.StrictMode>
    );
}
rerenderTree(store.getState)
store.subscribe(rerenderTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();