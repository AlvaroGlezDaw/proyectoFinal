document.getElementById("vans").addEventListener("click", () => {
    clickVehicleButton("vans");
    window.location='index.html';
    localStorage.setItem('clickedVehicle', "vans");
});