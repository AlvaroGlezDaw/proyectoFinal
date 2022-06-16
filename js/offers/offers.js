document.getElementById("offers").addEventListener("click", () => {
    clickVehicleButton("offers");
    window.location='index.html';
    localStorage.setItem('clickedVehicle', "offers");
});