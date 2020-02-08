import * as firebase from "firebase/app";

// import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
// import "firebase/storage";
// import "firebase/performance";


// REPLCE BELOW FIREBASE CONFIGURE OF YOUR OWN

firebase.initializeApp({
    ...
});

export default firebase;

//export const analytics = firebase.analytics();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
//export const storage = firebase.storage();
//export const performance = firebase.performance();