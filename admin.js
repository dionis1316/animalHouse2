/* Formatting function for row details - modify as you need */
function format ( d ) {
    // `d` is the original data object for the row
   return `<table> 
   <tr> 
       <td>Client:</td> 
       <td> ${d.userName} </td> 
   </tr> 
   <tr> 
   <td>E-mail:</td> 
   <td> ${d.userEmail} </td> 
</tr> 
<tr> 
   <td>Ceular:</td> 
   <td> ${d.userPhone} </td> 
</tr> 

<tr> 
   <td>Direccion</td> 
   <td> ${d.userAddress} </td> 
</tr> 
<tr> 
<td>Year:</td> 
<td> ${d.year} </td> 
</tr> 
<td>Date:</td> 
<td>${d.date} </td> 
</tr> 
<tr> 
<td>Hour:</td> 
<td>${d.hour} </td> 
</tr> 
<tr> 
<td>Payment Method:</td> 
<td>${d.payment} </td> 
</tr> 
<tr> 
<td>Order:</td> 
<td>${d.order} </td> 
</tr> 
<tr> 
<td>Id:</td> 
<td> ${d.id} </td> 
</tr> 
<tr> 
<td>Total:</td> 
<td> ${d.total} </td> 
</tr> 
<tr> 
<td>Products:</td> 
  <td>  ${d.products.map(function(producto){
        return `<ul >
            <li>Product: ${producto.name} </li>
            <li>Price: ${producto.price } </li>
            </ul>`;
    })}</td>

</tr> 
   
</table>`;  
} // end format

$(document).ready(function() {
    setTimeout(function () {
        var table = $('#tableOrders').DataTable({
            "data": final.datos,
            select:"single",
            "columns": [
                {
                    "className": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": '',
                    "render": function () {
                        return '<i class="fa fa-plus-square" aria-hidden="true"></i>';
                    },
                    width:"15px"
                },
                { "data": "id" },
                { "data": "order" },
                { "data": "date" },
                { "data": "userName" },
                { "data": "payment" },
                { "data": "total" }
    
            ],
            "order": [[1, 'desc']]
        });
         
        // Add event listener for opening and closing details
        $('#tableOrders tbody').on('click', 'td.details-control', function () {
    
          
            var tr = $(this).closest('tr');
            var tdi = tr.find("i.fa");
            var row = table.row(tr);
     
            if ( row.child.isShown() ) {
                // This row is already open - close it
                row.child.hide();
                     tr.removeClass('shown');
                     tdi.first().removeClass('fa-minus-square');
                     tdi.first().addClass('fa-plus-square');
            }
            else {
                // Open this row
                row.child(format(row.data())).show();
                tr.addClass('shown');
                tdi.first().removeClass('fa-plus-square');
                tdi.first().addClass('fa-minus-square');
            }
        } ); 
    },5000)
} );

//--------------------------------------
 
var firebaseConfig = {
    apiKey: "AIzaSyDqlQVAjrGbJE3xd68ZOzqhNVRoIEjmixE",
    authDomain: "petsstore-aaa1f.firebaseapp.com",
    databaseURL: "https://petsstore-aaa1f.firebaseio.com",
    projectId: "petsstore-aaa1f",
    storageBucket: "",
    messagingSenderId: "206475584151",
    appId: "1:206475584151:web:3ec41109223a4459"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

    var order= firebase.database().ref("orders/");
    
order.on("child_added",function(data){
    var orderValue =data.val();
    console.log(orderValue);
    fventas(orderValue);
});
function fventas(params) {
  final.datos.push(params);
}
var final={
   "datos":[]
}
 

