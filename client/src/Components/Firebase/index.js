import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDhy_cnsCQ_q1bgRAmiFIHVWict0YKy654",
  authDomain: "todolist-79209.firebaseapp.com",
  databaseURL: "https://todolist-79209.firebaseio.com",
  projectId: "todolist-79209",
  storageBucket: "todolist-79209.appspot.com",
  messagingSenderId: "442607286603",
  appId: "1:442607286603:web:1154e894c7303178"
};
firebase.initializeApp(firebaseConfig);
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = firebase.storage();

export default storage;
