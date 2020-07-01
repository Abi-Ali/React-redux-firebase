import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBSJALnT00ed-8RpAXIlQ4d5XIjMamB8-8",
    authDomain: "projectplanning-5b18c.firebaseapp.com",
    databaseURL: "https://projectplanning-5b18c.firebaseio.com",
    projectId: "projectplanning-5b18c",
    storageBucket: "projectplanning-5b18c.appspot.com",
    messagingSenderId: "550119554895",
    appId: "1:550119554895:web:6e1762d633fe7670348f3a",
    measurementId: "G-B078FG48J0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export default firebase