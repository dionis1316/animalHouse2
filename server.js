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
app.use('/js',express.static(path.join(__dirname, 'public/js')));


app.get('/', (req, res) => {
    res.render('index.pug');
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
/*app.get('/AdopcionFech', (req, res) => {
  res.json([
    {name:'Felipita' ,donacion:1},
    {name:'Lolita' ,donacion:1},
    {name:'Pocha' ,donacion:1},
    {name:'Pili' ,donacion:1}
  ]);
});*/
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
  res.render('cart.pug');
});

app.get('/carritoFech', (req, res) => {
  db.ref("orders").on("value",function(snapshot){
      list = snapshot.val();
  });
  res.json(list);
});
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});