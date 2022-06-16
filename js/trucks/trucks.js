document.getElementById("trucks").addEventListener("click", () => {
    clickVehicleButton("trucks");
    window.location='index.html';
    localStorage.setItem('clickedVehicle', "trucks");
});