import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
var firebaseConfig = {
    apiKey: "AIzaSyCp-GSh6u_E22yyum9u7y_elwikfySknpQ",
    authDomain: "carracing35-16ef3.firebaseapp.com",
    databaseURL: "https://carracing35-16ef3-default-rtdb.firebaseio.com",
    projectId: "carracing35-16ef3",
    storageBucket: "carracing35-16ef3.appspot.com",
    messagingSenderId: "931718329158",
    appId: "1:931718329158:web:4451102ee95d89a4792b47"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


