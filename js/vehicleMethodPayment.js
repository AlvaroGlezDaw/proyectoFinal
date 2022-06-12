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
}
else{
    window.location.href="../../index.html";
}