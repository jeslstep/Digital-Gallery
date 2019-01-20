import firebase from 'firebase/app';
import 'firebase/storage';
import api_key from './api_key';

  // Initialize Firebase
  var config = {
      apiKey: api_key,
      authDomain: "digital-gallery-457b3.firebaseapp.com",
      databaseURL: "https://digital-gallery-457b3.firebaseio.com",
      projectId: "digital-gallery-457b3",
      storageBucket: "digital-gallery-457b3.appspot.com",
      messagingSenderId: "488210519498"
  };

  firebase.initializeApp(config);

   const storage = firebase.storage();

 export {
    storage, firebase as default
 }