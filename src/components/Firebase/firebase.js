import firebase from "firebase";

//Firebase auth
var firebaseConfig = {
  apiKey: "AIzaSyDUyk22uW-YF0DQ1NFTWdkT-C5KuxUriS8",
  authDomain: "golden-legacy.firebaseapp.com",
  databaseURL: "https://golden-legacy.firebaseio.com",
  projectId: "golden-legacy",
  storageBucket: "golden-legacy.appspot.com",
  messagingSenderId: "1036071694839",
  appId: "1:1036071694839:web:242dc2649d62b649c07ef2",
  measurementId: "G-Y1KWWXNB82",
};

firebase.initializeApp(firebaseConfig);
export default firebase;