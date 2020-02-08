import * as firebase from "firebase/app";

// import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
// import "firebase/storage";
// import "firebase/performance";

firebase.initializeApp({
    apiKey: 'AIzaSyDyIg9GDHMjEB4I8cqklw77ieHdSDNnxyg',
    authDomain: 'svd-app-firebase.firebaseapp.com',
    databaseURL: 'https://svd-app-firebase.firebaseio.com',
    projectId: 'svd-app-firebase',
    storageBucket: 'svd-app-firebase.appspot.com',
    messagingSenderId: '699400500890',
    appId: '1:699400500890:web:17a3fa6dad8e4ebd'
});

export default firebase;

//export const analytics = firebase.analytics();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
//export const storage = firebase.storage();
//export const performance = firebase.performance();