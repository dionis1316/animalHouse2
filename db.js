var admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert("AIzaSyDqlQVAjrGbJE3xd68ZOzqhNVRoIEjmixE"),
    databaseURL: "https://petsstore-aaa1f.firebaseio.com"
});
var db = admin.database();

