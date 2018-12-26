import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhMYbtZsF9hGX2LlwmyJl0kgMlKXQbnlI",
  authDomain: "finedine-inam95.firebaseapp.com",
  databaseURL: "https://finedine-inam95.firebaseio.com",
  projectId: "finedine-inam95",
  storageBucket: "finedine-inam95.appspot.com",
  messagingSenderId: "348042232274"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export default firebase;
