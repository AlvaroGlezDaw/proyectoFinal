document.getElementById("cars").addEventListener("click", () => {
    clickVehicleButton("cars");
    window.location='index.html';
    localStorage.setItem('clickedVehicle', "cars");
});