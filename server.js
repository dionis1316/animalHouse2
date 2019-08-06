const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;

const db = require('./db.js');
// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
var list;
// Static files
app.use('/public', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    //res.render('index.pug');
     db.ref("orders").on("value",function(snapshot){
        list = snapshot.val();
    });
    res.json(list);
  });
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});