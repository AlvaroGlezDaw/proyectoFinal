//null o admin
if (localStorage.getItem('userLogued') !== null && JSON.parse(localStorage.getItem('userLogued')).email !== "admin") {
    loginChangeNav();
    let choosenVehicle = JSON.parse(localStorage.getItem('choosenVehicle'));

    let userinfo = JSON.parse(localStorage.getItem('userLogued'));

    document.getElementById("idCar").setAttribute("value", choosenVehicle._id.$oid);
    document.getElementById("vehiclePrice").innerHTML = choosenVehicle.precio + "€";

    document.getElementById("userDataName").innerHTML += "<mon class='font-monospace'>" + userinfo.nombre + "</mon>";
    document.getElementById("userDataLastName").innerHTML += "<mon class='font-monospace'>" + userinfo.nombre + "</mon>";
    document.getElementById("userEmail").innerHTML += "<mon class='font-monospace'>" + userinfo.email + "</mon>";
    document.getElementById("userDirection").innerHTML += "<mon class='font-monospace'>" + userinfo.direccion + "</mon>";

}
else {
    window.location.href = "../../index.html";
}