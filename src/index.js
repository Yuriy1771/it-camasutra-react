import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 1, name: 'Yuliana',},
    {id: 2, name: 'Adam',},
    {id: 3, name: 'Mom',},
    {id: 4, name: 'Tolya',},
    {id: 5, name: 'Sveta',},
    {id: 6, name: 'Tanya',},
    {id: 7, name: 'Sasha',},
    {id: 8, name: 'Dad'},
]

let messages = [
    {id: 1, message: 'Hello! i am at work now'},
]

let posts = [
    {id: 1, postMessage: 'Hi, how are you?', likes_count: 5, userAvatar: '',},
    {id: 2, postMessage: 'Why doesn\'t my friend answer me?', likes_count: 10, userAvatar: '',},
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
