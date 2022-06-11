let idVehicle=localStorage.getItem('idVehicleDetail');
comprobarLogin();
fetch("../../php/vehicleDetails.php",{
    headers: {'Content-type': 'application/json'},
    method: 'POST', 
    body: JSON.stringify(idVehicle)
}).then(function(respuesta) {
    return respuesta.json(); 
}).then(function(data) {
    document.getElementById("imgCar").setAttribute("src","../../"+data.imagen);
    document.getElementById("imgCar2").setAttribute("src","../../"+data.imagen);
    document.getElementById("nombreVehiculo").textContent+=data.modelo;
    document.getElementById("precioVehiculo").textContent+=data.precio +"€";
    document.getElementById("fabricante").textContent+=data.marca;
    document.getElementById("potencia").textContent+=data.potencia;
    document.getElementById("cilindrada").textContent+=data.cilindrada;
    document.getElementById("combustible").textContent+=data.combustible;
    document.getElementById("cambio").textContent+=data.cambio;
    document.getElementById("nPuertas").textContent+=data.nPuertas;
    document.getElementById("color").textContent+=data.color;
    document.getElementById("anno").textContent+=data.anno;
    document.getElementById("descripcion").textContent +=" TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto";

    if(data.segunda_mano==="yes"){
        document.getElementById("buy").hidden=true;
        document.getElementById("sellerDates").hidden=false;

        document.getElementById("sellerName").textContent+=data.datos_anunciante.nombre;
        document.getElementById("sellerPhone").textContent+=data.datos_anunciante.telefono;
        document.getElementById("sellerEmail").textContent+=data.datos_anunciante.email;
    }
}).catch(function(ex) { 
    console.error('Error', ex.message) 
});

document.getElementById("buy").addEventListener("click", ()=>{
    if(localStorage.getItem('userLogued')!==null){
        window.location.href="http://localhost/proyecto/vistas/usuario/vehicleMethodPayment.html"
    }
    else{
        window.location.href="http://localhost/proyecto/vistas/usuario/login.html"
    }
})

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