document.getElementById("cars").addEventListener("click", () => {
    window.location='../../index.html';
    localStorage.setItem('clickedVehicle', "cars");
});

document.getElementById("bikes").addEventListener("click", () => {
    window.location='../../index.html';
    localStorage.setItem('clickedVehicle', "bikes");
});

document.getElementById("vans").addEventListener("click", () => {
    window.location='../../index.html';
    localStorage.setItem('clickedVehicle', "vans");
});

document.getElementById("trucks").addEventListener("click", () => {
    window.location='../../index.html';
    localStorage.setItem('clickedVehicle', "trucks");
});

document.getElementById("offers").addEventListener("click", () => {
    window.location='../../index.html';
    localStorage.setItem('clickedVehicle', "offers");
});