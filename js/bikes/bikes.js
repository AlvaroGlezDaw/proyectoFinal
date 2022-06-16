document.getElementById("bikes").addEventListener("click", () => {
    clickVehicleButton("bikes");
    window.location='index.html';
    localStorage.setItem('clickedVehicle', "bikes");
});