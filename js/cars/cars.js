document.getElementById("cars").addEventListener("click", () => {
    clickVehicleButton("cars");
    window.location='index.html';
    console.log("hola2")
    localStorage.setItem('clickedVehicle', "cars");
});