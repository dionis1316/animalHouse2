var admin = require('firebase-admin');
var serviceAccount = require("./animalhouse-3c43a-firebase-adminsdk-8khd8-c751f31582.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://petsstore-aaa1f.firebaseio.com"
});
var db = admin.database();

module.exports = db;