//null o admin
if(localStorage.getItem('userLogued')!==null){
comprobarLogin();
let idCar=localStorage.getItem('idVehicleDetail');
let userinfo=JSON.parse(localStorage.getItem('userLogued'));

document.getElementById("idCar").setAttribute("value", idCar);

document.getElementById("userDataName").textContent=userinfo.nombre;
document.getElementById("userEmail").textContent=userinfo.email;
document.getElementById("userDirection").textContent=userinfo.direccion;

}
else{
    window.location.href="../../index.html";
}