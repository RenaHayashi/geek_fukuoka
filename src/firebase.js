import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDA3j1AbLbyFJxV7aR1epbG8boAM_pr0w",
  authDomain: "geek-fukuoka.firebaseapp.com",
  databaseURL: "https://geek-fukuoka.firebaseio.com",
  projectId: "geek-fukuoka",
  storageBucket: "geek-fukuoka.appspot.com",
  messagingSenderId: "767700052728",
  appId: "1:767700052728:web:bc4078c4996cb312fea90d",
  measurementId: "G-PTTV3D7N72"
};

const app = firebase.initializeApp(firebaseConfig);

export default app.firestore();
