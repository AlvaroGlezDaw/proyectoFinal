//null o admin
if(localStorage.getItem('userLogued')!==null){
comprobarLogin();
let idCar=localStorage.getItem('idVehicleDetail');
let userinfo=JSON.parse(localStorage.getItem('userLogued'));

document.getElementById("idCar").setAttribute("value", idCar);

document.getElementById("userDataName").textContent=userinfo.nombre;
document.getElementById("userEmail").textContent=userinfo.email;
document.getElementById("userDirection").textContent=userinfo.direccion;


document.getElementById("cars").addEventListener("click", () => {
    window.location='http://localhost/proyecto/';
    localStorage.setItem('clickedVehicle', "cars");
});

document.getElementById("bikes").addEventListener("click", () => {
    window.location='http://localhost/proyecto/';
    localStorage.setItem('clickedVehicle', "bikes");
});

function comprobarLogin(){
    if(localStorage.getItem('userLogued')!==null){
        document.getElementById("loginRegister").setAttribute("class", "d-none");
        document.getElementById("loginDates").setAttribute("class", "d-block");
        document.getElementById("userName").textContent="Bienvenido" + JSON.parse(localStorage.getItem('userLogued')).nombre;
    }
    else{
        document.getElementById("loginDates").setAttribute("class", "d-none");
        document.getElementById("userName").textContent="";
        document.getElementById("loginRegister").setAttribute("class", "d-block");
    }
}

document.getElementById("logout").addEventListener("click", ()=>{
    localStorage.removeItem('userLogued');
    comprobarLogin();
});
}
else{
    window.location.href="http://localhost/proyecto/"
}