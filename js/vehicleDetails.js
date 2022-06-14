let choosenVehicle = JSON.parse(localStorage.getItem('choosenVehicle'));
loginChangeNav();

document.getElementById("imgCar").setAttribute("src", "../../" + choosenVehicle.imagen);
document.getElementById("imgCar2").setAttribute("src", "../../" + choosenVehicle.imagen);
document.getElementById("nombreVehiculo").innerHTML += "<mon class='font-monospace'>" + choosenVehicle.modelo + "</mon>";
document.getElementById("precioVehiculo").innerHTML += "<mon class='font-monospace'>" + choosenVehicle.precio + "€</mon>";
document.getElementById("fabricante").innerHTML += "<mon class='font-monospace'>" + choosenVehicle.marca + "</mon>";
document.getElementById("potencia").innerHTML += "<mon class='font-monospace'>" + choosenVehicle.potencia + " CV</mon>";
document.getElementById("cilindrada").innerHTML += "<mon class='font-monospace'>" + choosenVehicle.cilindrada + "</mon>";
document.getElementById("combustible").innerHTML += "<mon class='font-monospace'>" + choosenVehicle.combustible + "</mon>";
document.getElementById("cambio").innerHTML += "<mon class='font-monospace'>" + choosenVehicle.cambio + "</mon>";
document.getElementById("nPuertas").innerHTML += "<mon class='font-monospace'>" + choosenVehicle.nPuertas + "</mon>";
document.getElementById("color").innerHTML += "<mon class='font-monospace'>" + choosenVehicle.color + "</mon>";
document.getElementById("anno").innerHTML += "<mon class='font-monospace'>" + choosenVehicle.anno + "</mon>";
document.getElementById("descripcion").innerHTML += "<mon class='font-monospace'>" + choosenVehicle.descripcion + "</mon>";

if (choosenVehicle.segunda_mano === "yes") {
    document.getElementById("buy").hidden = true;
    document.getElementById("sellerDates").hidden = false;

    document.getElementById("sellerName").innerHTML += "<mon class='font-monospace'>" + choosenVehicle.datos_anunciante.nombre + "</mon>";
    document.getElementById("sellerPhone").innerHTML += "<mon class='font-monospace'>" + choosenVehicle.datos_anunciante.telefono + "</mon>";
    document.getElementById("sellerEmail").innerHTML += "<mon class='font-monospace'>" + choosenVehicle.datos_anunciante.email + "</mon>";
    document.getElementById("sellerDirection").innerHTML += "<mon class='font-monospace'>" + choosenVehicle.datos_anunciante.direccion + "</mon>";
}


document.getElementById("buy").addEventListener("click", () => {
    if (localStorage.getItem('userLogued') !== null) {
        window.location.href = "vehicleMethodPayment.html"
    }
    else {
        window.location.href = "login.html"
    }
});