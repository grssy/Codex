import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCc7epY2mFfCPpz3CsE4xX_aySesphbsWo',
  authDomain: 'todo-list-a506d.firebaseapp.com',
  projectId: 'todo-list-a506d',
  storageBucket: 'todo-list-a506d.appspot.com',
  messagingSenderId: '803700577399',
  appId: '1:803700577399:web:bd361596d3ed3f2003a272',
});
// Initialize Firebase

const db = getFirestore();

export default db;
