var x = document.getElementById("userName");
var p = document.getElementById("userPassword");

document.getElementById("formLogin").addEventListener("submit",(ee)=>{
    ee.preventDefault();
    console.log(x.value);
    console.log(p.value);
    if (x.value== "info@dcsolution.net" && p.value=="1q2w3e4r") {
        swal.fire({
            position:'center',
            type:'success',
            title:'Bienvenido',
            text:`Acceso Correcto`,
        });
        x.value= '';
        p.value='';
            setTimeout(() => {
                loadPage();                
            }, 3000);
    } else {
        swal.fire({
            position:'center',
            type:'error',
            title:'Error',
            text:`Access Denied`,
        });
        x.value= '';
        p.value='';
       
    }
    function loadPage(){
        window.location.href="./admin.html";
    }
});