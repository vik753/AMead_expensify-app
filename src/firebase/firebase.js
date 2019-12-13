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
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//        expenses.push({
//            id: childSnapshot.key,
//            ...childSnapshot.val()
//        })
//     });
//     console.log(expenses);
// });

// database.ref('expenses/-Lvobje8qoOjYKZJGp8p').update({
//     amount: 3500.99
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
// });

// const expenses = [
// //     {
// //     description: 'Buy coffee',
// //     note: 'at least 8 cups strong',
// //     amount: 165,
// //     createdAt: Date.now()
// // }
// //,{
// //     description: 'Pay rent',
// //     note: 'last payment.',
// //     amount: 3000,
// //     createdAt: Date.now() + 3000
// // },
// // {
// //     description: 'Buy bread',
// //     note: 'white',
// //     amount: 28.99,
// //     createdAt: Date.now() - 3000
// // }
//   ];
//
// expenses.forEach((expense) => {
//    database.ref('expenses').push(expense);
// });

// database.ref().set({
//     name: 'Andrew Mead',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Philadelphia',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved.');
// }).catch((e) => {
//     console.log('This filed!', e);
// });
//
// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// });
//
// database.ref().update({
//     name: 'Mike',
//     'job/title': 'php dev',
//     'job/company': 'Amazon'
// })
//     .then(() => console.log('Data was updated.'))
//     .catch((e) => console.log('Error: ', e));
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
// });
// // database.ref('location/city').set('Los Angeles');
// database.ref('attributes').set({
//     height: '149sm',
//     weight: '65kg'
// }).then(() => {
//     console.log("Data's was updated!");
// }).catch((e) => console.log('Error (attributes):', e));
//
// database.ref('isSingle').remove()
//     .then(() => console.log('Data removed was successful!'))
//     .catch((e) => console.log('Error: removing was unsuccessful!'));