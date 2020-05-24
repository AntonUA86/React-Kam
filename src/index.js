import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
    { id: 1, name: "Anton" },
    { id: 2, name: "Olha" },
    { id: 3, name: "Ugor" },
    { id: 4, name: 'Dany' },
    { id: 5, name: "Emma" },
]
let messagesData = [
    { id: 1, message: "Oh, baby, baby" },
    { id: 2, message: "How was I supposed to know " },
    { id: 3, message: "That something wasn't right here?" },
    { id: 4, message: "I shouldn't have let you go" },
    { id: 5, message: "And now you're out of sight, yeah" },
]
let post = [
    {id:1 , message:"Hi, how", likesCount:12},
    {id:2 , message:"Hi, my friend ",likesCount:15},
]



ReactDOM.render(<App dialogsData={dialogsData} messagesData={messagesData} post={post}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
