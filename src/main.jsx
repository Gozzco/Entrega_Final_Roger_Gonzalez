import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './app.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH2pPPSL7tulF5H5ssr89MDD8fxwS1h6U",
  authDomain: "needo-e3425.firebaseapp.com",
  projectId: "needo-e3425",
  storageBucket: "needo-e3425.appspot.com",
  messagingSenderId: "883064347195",
  appId: "1:883064347195:web:5811030f624b5bb6d81a1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
)
