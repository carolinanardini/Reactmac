import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKr_w3xB-QNW2H-GqSLKjZ35cu-tsZDJs",
  authDomain: "react-fa45b.firebaseapp.com",
  projectId: "react-fa45b",
  storageBucket: "react-fa45b.appspot.com",
  messagingSenderId: "814961268799",
  appId: "1:814961268799:web:c987800e9e5bc597f9008a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
