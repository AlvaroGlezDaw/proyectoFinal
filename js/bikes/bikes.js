document.getElementById("bikes").addEventListener("click", () => {
    clickVehicleButton("bikes");
    window.location='http://localhost/proyecto/';
    localStorage.setItem('clickedVehicle', "bikes");
});