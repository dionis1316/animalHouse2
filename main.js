// GLOBAL
var products=[];
var cartItems=[];
var cart_n = document.getElementById('cart_n');
// DIVS
var juguetesDIV= document.getElementById("juguetesDIV");
var correasDIV = document.getElementById("correasDIV");
var adoptaDIV = document.getElementById("adoptaDIV");
//INFORMATION
var JUGUETES=[
    {name:'Juguete 001' ,price:3},
    {name:'Juguete 002' ,price:2},
    {name:'Juguete 003' ,price:4},
    {name:'Juguete 004' ,price:2},
    {name:'Juguete 005' ,price:3},
    {name:'Juguete 006' ,price:5},
    {name:'Juguete 007' ,price:3},
    {name:'Juguete 008' ,price:4}
];
var ALIMENTO=[
    {name:'Alimento #1' ,price:3},
    {name:'Alimento #2' ,price:4},
    {name:'Alimento #3' ,price:2},
    {name:'Alimento #4' ,price:5},
    {name:'Alimento #5' ,price:7},
    {name:'Alimento #6' ,price:8},
    {name:'Alimento #7' ,price:2},
    {name:'Alimento #8' ,price:3}
    
  ];
var ADOPTA=[
    {name:'Felipita' ,donacion:1},
    {name:'Lolita' ,donacion:1},
    {name:'Pocha' ,donacion:1},
    {name:'Pili' ,donacion:1}
];
//HTML
function HTMLjuguestesProduct(con){
    let URL = `img/juguetes/juguete${con}.jpeg`;
    let btn = `btnJuguete${con}`;
    return `
   
    <div class="col s3 wow fadeInUp data-wow-delay="3s"  data-wow-offset="300" ">
      <div class="card">
        <div class="card-image">
          <img src="${URL}">
          
          <a id="${btn}" onclick="cart('${JUGUETES[con-1].name}','${JUGUETES[con-1].price}','${URL}','${con}','${btn}')" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
        <i style="color:orange;" class="fa fa-star"  ></i>
        <i style="color:orange;" class="fa fa-star"  ></i>
        <i style="color:orange;" class="fa fa-star"  ></i>
        <i style="color:orange;" class="fa fa-star"  ></i>
        <i style="color:orange;" class="fa fa-star"  ></i>
        <span class="card-title">${JUGUETES[con-1].name}</span>
        <p>Precio: ${JUGUETES[con-1].price}.00</p>
       
        </div>
      </div>
    </div>

         

      
    `
}
function HTMLcorreasProduct(con){
    let URL = `img/alimentos/alimento${con}.jpeg`;
    let btn = `btnCorreas${con}`;
    return `
    <div class="col s3 wow fadeInUp data-wow-delay="3s"  data-wow-offset="300" ">
    <div class="card">
      <div class="card-image">
        <img src="${URL}">
        
        <a id="${btn}" onclick="cart('${ALIMENTO[con-1].name}','${ALIMENTO[con-1].price}','${URL}','${con}','${btn}')" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
      </div>
      <div class="card-content">
      <i style="color:orange;" class="fa fa-star"  ></i>
      <i style="color:orange;" class="fa fa-star"  ></i>
      <i style="color:orange;" class="fa fa-star"  ></i>
      <i style="color:orange;" class="fa fa-star"  ></i>
      <i style="color:orange;" class="fa fa-star"  ></i>
      <span class="card-title">${ALIMENTO[con-1].name}</span>
      <p>Precio: ${ALIMENTO[con-1].price}.00</p>
     
      </div>
    </div>
  </div>
    `
}
function HTMLadoptaProduct(con){
    let URL = `img/adopta/perro${con}.jpeg`;
    let btn = `btnAdopta${con}`;
    return `
    <div class="col s3 wow fadeInUp data-wow-delay="3s"  data-wow-offset="300" ">
    <div class="card">
      <div class="card-image">
        <img src="${URL}">
        
        <a id="${btn}" onclick="cart('${ADOPTA[con-1].name}','${ADOPTA[con-1].donacion}','${URL}','${con}','${btn}')" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
      </div>
      <div class="card-content">
      <i style="color:orange;" class="fa fa-star"  ></i>
      <i style="color:orange;" class="fa fa-star"  ></i>
      <i style="color:orange;" class="fa fa-star"  ></i>
      <i style="color:orange;" class="fa fa-star"  ></i>
      <i style="color:orange;" class="fa fa-star"  ></i>
      <span class="card-title">${ADOPTA[con-1].name}</span>
      <p>Donacion: ${ADOPTA[con-1].donacion}.00</p>
     
      </div>
    </div>
  </div>
    `
}
//ANIMATION 
function animation(){
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000
  });
  
  Toast.fire({
    type: 'success',
    title: 'Added to shopping cart'
  })

    
}
// CART FUNCTIONS
function cart(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage= JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
            products.push(item);
            localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products= JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products= JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    animation();
}

//RENDER
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  $(document).ready(function(){
    $('.modal').modal();
  });
function render(){
  new WOW().init();

    for (let index = 1; index <= 8; index++) {
        juguetesDIV.innerHTML+=`${HTMLjuguestesProduct(index)}`;
    }
    for (let index = 1; index <= 8; index++) {
        correasDIV.innerHTML+=`${HTMLcorreasProduct(index)}`;
        adoptaDIV.innerHTML+=`${HTMLadoptaProduct(index)}`;
    }
    if (localStorage.getItem("cart")==null) {
        
    } else {
        products=JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }

}
