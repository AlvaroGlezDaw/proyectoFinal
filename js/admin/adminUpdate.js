let idVehicleToUpdate = localStorage.getItem('idVehicleToUpdate');

document.getElementById("idVehicle").setAttribute("value", idVehicleToUpdate);


/*document.getElementById("vehiclePrice").innerHTML = choosenVehicle.precio + "€";

document.getElementById("userDataName").innerHTML += "<mon class='font-monospace'>" + userinfo.nombre + "</mon>";
document.getElementById("userDataLastName").innerHTML += "<mon class='font-monospace'>" + userinfo.nombre + "</mon>";
document.getElementById("userEmail").innerHTML += "<mon class='font-monospace'>" + userinfo.email + "</mon>";
document.getElementById("userDirection").innerHTML += "<mon class='font-monospace'>" + userinfo.direccion + "</mon>";

document.getElementById("submitForm").addEventListener('click', ()=>{
    document.payVehicle.submit();
    sendEmail(userinfo.email, choosenVehicle.marca);
})*/