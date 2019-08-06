var admin = require('firebase-admin');

admin.initializeApp({
    apiKey: "AIzaSyDqlQVAjrGbJE3xd68ZOzqhNVRoIEjmixE",
    authDomain: "petsstore-aaa1f.firebaseapp.com",
    databaseURL: "https://petsstore-aaa1f.firebaseio.com",
    projectId: "petsstore-aaa1f",
    storageBucket: "petsstore-aaa1f.appspot.com",
    messagingSenderId: "206475584151",
    appId: "1:206475584151:web:3ec41109223a4459"

});
var db = admin.database();

