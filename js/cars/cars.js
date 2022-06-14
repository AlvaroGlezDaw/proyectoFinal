document.getElementById("cars").addEventListener("click", () => {
    clickVehicleButton("cars");
    window.location='http://localhost/proyecto/';
    localStorage.setItem('clickedVehicle', "cars");
});