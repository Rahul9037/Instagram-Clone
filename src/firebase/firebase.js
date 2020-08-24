import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCQyUbYgllhUofAnB-FT9Cv-L2HyivSvbk",
    authDomain: "instagram-clone-abced.firebaseapp.com",
    databaseURL: "https://instagram-clone-abced.firebaseio.com",
    projectId: "instagram-clone-abced",
    storageBucket: "instagram-clone-abced.appspot.com",
    messagingSenderId: "1098495221572",
    appId: "1:1098495221572:web:5c5d9db118ad788efe4111",
    measurementId: "G-VPGKF09BQF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider ,storage }
export default db;
  