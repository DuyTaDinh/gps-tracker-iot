import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpq6nrIJSxeGBBN5en5mpJ7b05xRldIXQ",
    authDomain: "gps-demo-114a4.firebaseapp.com",
    databaseURL: "https://gps-demo-114a4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "gps-demo-114a4",
    storageBucket: "gps-demo-114a4.appspot.com",
    messagingSenderId: "132592517931",
    appId: "1:132592517931:web:1a3ea5f467295a596a7b6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const realtimeDB = getDatabase(app)
// import { initializeApp } from "firebase/app";
// import {getDatabase} from "firebase/database";
//
// function StartFirebase(){
//     const firebaseConfig = {
//         apiKey: "AIzaSyBpq6nrIJSxeGBBN5en5mpJ7b05xRldIXQ",
//         authDomain: "gps-demo-114a4.firebaseapp.com",
//         databaseURL: "https://gps-demo-114a4-default-rtdb.asia-southeast1.firebasedatabase.app",
//         projectId: "gps-demo-114a4",
//         storageBucket: "gps-demo-114a4.appspot.com",
//         messagingSenderId: "132592517931",
//         appId: "1:132592517931:web:1a3ea5f467295a596a7b6e"
//     };
//     const app = initializeApp(firebaseConfig);
//     return getDatabase(app);
// }
// export default StartFirebase;