import reportWebVitals from './reportWebVitals';
import {state, subscribe} from "./Redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, changeNewMessageText, changeNewPostText, sendNewMessage} from "./Redux/state";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state}
             addPostCallback={addPost}
             changeNewTextCallback={changeNewPostText}
             sendNewMessage={sendNewMessage}
             changeNewMessageText={changeNewMessageText}
        />,
        document.getElementById('root')
    );
}

rerenderEntireTree()

subscribe(rerenderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
