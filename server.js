const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 
const db = require('./db.js');
// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// Static files
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/js',express.static(path.join(__dirname, 'public/js')));

var logging = false;

app.get('/', (req, res) => {
    res.render('index.pug',{login:logging});
});
app.get('/ProductosFech', (req, res) => {
    res.json([
        {name:'Juguete 001' ,price:3},
        {name:'Juguete 002' ,price:2},
        {name:'Juguete 003' ,price:4},
        {name:'Juguete 004' ,price:2},
        {name:'Juguete 005' ,price:3},
        {name:'Juguete 006' ,price:5},
        {name:'Juguete 007' ,price:3},
        {name:'Juguete 008' ,price:4}
    ]);
});
app.get('/AlimentosFech', (req, res) => {
  res.json([
    {name:'Alimento #1' ,price:3},
    {name:'Alimento #2' ,price:4},
    {name:'Alimento #3' ,price:2},
    {name:'Alimento #4' ,price:5},
    {name:'Alimento #5' ,price:7},
    {name:'Alimento #6' ,price:8},
    {name:'Alimento #7' ,price:2},
    {name:'Alimento #8' ,price:3}
  ]);
});
app.get('/carrito', (req, res) => {
  res.render('cart.pug',{login:logging});
});
app.post('/order', (req, res) => {
  const k = req.body;
  db.ref("orders").push(k);
  res.json({save : true });    
});
app.get('/logout', (req, res) => {
  logging = false;
  res.render('index.pug',{login:logging});
});
app.post('/login', (req, res) => {
  const { user, pass } = req.body;
  if(user == "info@dcsolution.net" && pass == "1q2w3e4r"){
    logging = true;
    res.json({acceso : true });    
  } else {
    res.json({acceso : false });    
  }
});
app.get('/Admin', (req, res) => {
  res.render('admin.pug',{login:logging});
});
app.get('/carritoFech', (req, res) => {
  var list = [];
  db.ref("orders").on("child_added",function(snapshot){
    console.log(snapshot.val());
    list.push(snapshot.val());
  });
  console.log(list);
  res.json(list);
});
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});