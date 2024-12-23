import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addMessage, addPost, subscribe, updateNewTextMessage, updateNewTextPost} from "./redux/state";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

window.state = state
const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderTree = (state) => {
    root.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                updateNewTextPost={updateNewTextPost}
                addMessage={addMessage}
                updateNewTextMessage={updateNewTextMessage}
            />
        </React.StrictMode>
    );
}
rerenderTree(state)
subscribe(rerenderTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();