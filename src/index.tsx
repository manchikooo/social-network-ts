import reportWebVitals from './reportWebVitals';
import {store} from "./Redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
