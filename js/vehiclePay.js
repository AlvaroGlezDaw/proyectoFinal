let idVehicle=localStorage.getItem('idVehicleDetail');

fetch("../../php/vehicleDetails.php",{
    headers: {'Content-type': 'application/json'},
    method: 'POST', 
    body: JSON.stringify(idVehicle)
}).then(function(respuesta) {
    return respuesta.json(); 
}).then(function(data) {
    document.getElementById("vehicleName").textContent+=data.modelo;
    document.getElementById("vehiclePrecio").textContent+=data.precio +"€";
    document.getElementById("imgCar").setAttribute("src","../../"+data.imagen);
}).catch(function(ex) { 
    console.error('Error', ex.message) 
})

document.getElementById("cars").addEventListener("click", () => {
    window.location='http://localhost/proyecto/';
    localStorage.setItem('clickedVehicle', "cars");
});

document.getElementById("bikes").addEventListener("click", () => {
    window.location='http://localhost/proyecto/';
    localStorage.setItem('clickedVehicle', "bikes");
});