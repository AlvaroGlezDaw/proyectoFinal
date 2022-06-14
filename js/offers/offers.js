document.getElementById("offers").addEventListener("click", () => {
    clickVehicleButton("offers");
    window.location='http://localhost/proyecto/';
    localStorage.setItem('clickedVehicle', "offers");
});