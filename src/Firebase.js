import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB8-Ve6IqBFWQ8i0EzjxTFeDRzovNUcn9M",
    authDomain: "social-app-adeac.firebaseapp.com",
    databaseURL: "https://social-app-adeac-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "social-app-adeac",
    storageBucket: "social-app-adeac.appspot.com",
    messagingSenderId: "266156780344",
    appId: "1:266156780344:web:70ab0ef55060374cd36fcd",
    measurementId: "G-4BBY3W5KQ0"
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;

export const db = firebase.database();