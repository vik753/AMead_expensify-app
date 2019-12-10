import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDoz3n3hztbSKNyE9WKCZE0NGQrllDIK_s",
    authDomain: "expensify-9ad87.firebaseapp.com",
    databaseURL: "https://expensify-9ad87.firebaseio.com",
    projectId: "expensify-9ad87",
    storageBucket: "expensify-9ad87.appspot.com",
    messagingSenderId: "528904030523",
    appId: "1:528904030523:web:ce2f931ee3e4ee898ecf1e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
   name: 'Andrew Mead'
});