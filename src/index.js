import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/js/all.js';
import Youtube from "./service/youtube/youtube_axios";
import axios from "axios";
// npm install --save @fortawesome/fontawesome-free

const root = ReactDOM.createRoot(document.getElementById('root'));
const httpClient = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY
    }
})
const youtube = new Youtube(httpClient)

root.render(
  <React.StrictMode>
    <App
        youtube={youtube}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
