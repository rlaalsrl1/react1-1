import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello'
import Library from './Library'
import Clock from './Clock';
import Welcome from './4월3일/Welcome';
import CommentList from './4월3일/CommentList';
import Comment from './4월3일/Comment';
import Notification from './4월3일/Notification';
import NotificationList from './4월3일/NotificationList';
import Counter from './4월17일/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
 setInterval(() =>
   root.render(
 <React.StrictMode>
  <App />
 </React.StrictMode>
 )
)




// setInterval(() =>{
//   root.render(
//   <React.StrictMode>
//     <Clock />
//   </React.StrictMode>
// );
// }, 1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
