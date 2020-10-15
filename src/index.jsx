import React from 'react';
import ReactDom from 'react-dom';
import firebase from 'firebase';
import Router from './router/Router';
import './assets/styles/global.scss';

const firebaseConfig = {
  apiKey: 'AIzaSyAbFZn223TK7bRpeVCbm8XUL4dTSGCOkyQ',
  authDomain: 'ransa-b3c8b.firebaseapp.com',
  databaseURL: 'https://ransa-b3c8b.firebaseio.com',
  projectId: 'ransa-b3c8b',
  storageBucket: 'ransa-b3c8b.appspot.com',
  messagingSenderId: '279133755522',
  appId: '1:279133755522:web:b60d9ae478c7b400e3bc9b',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDom.render(<Router />, document.getElementById('app'));
