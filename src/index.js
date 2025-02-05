import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store.ts";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

//@ts-ignore
window.store = store
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();