import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, changeNewMessageText, changeNewPostText, sendNewMessage} from "./Redux/state";

export let rerenderEntireTree = (state) => {
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
