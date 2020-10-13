import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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
app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export { db, auth };
