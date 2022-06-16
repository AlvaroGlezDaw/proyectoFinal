document.getElementById("cars").addEventListener("click", () => {
    window.location='http://localhost/proyecto';
    localStorage.setItem('clickedVehicle', "cars");
});

document.getElementById("bikes").addEventListener("click", () => {
    window.location='http://localhost/proyecto';
    localStorage.setItem('clickedVehicle', "bikes");
});

document.getElementById("vans").addEventListener("click", () => {
    window.location='http://localhost/proyecto';
    localStorage.setItem('clickedVehicle', "vans");
});

document.getElementById("trucks").addEventListener("click", () => {
    window.location='http://localhost/proyecto';
    localStorage.setItem('clickedVehicle', "trucks");
});

document.getElementById("offers").addEventListener("click", () => {
    window.location='http://localhost/proyecto';
    localStorage.setItem('clickedVehicle', "offers");
});