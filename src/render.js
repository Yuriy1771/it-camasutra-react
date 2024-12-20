import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {addPost} from "./redux/state";

export let rerenderTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>
    );
}