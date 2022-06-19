document.getElementById("allCarsAdmin").addEventListener("click", () => {
    localStorage.setItem('showAdminTypeVehicle', "cars");
    window.location='homeAdmin.html';
});

document.getElementById("allBikesAdmin").addEventListener("click", () => {
    localStorage.setItem('showAdminTypeVehicle', "bikes");
    window.location='homeAdmin.html';
});

document.getElementById("allTrucksAdmin").addEventListener("click", () => {
    localStorage.setItem('showAdminTypeVehicle', "trucks");
    window.location='homeAdmin.html';
});

document.getElementById("allVansAdmin").addEventListener("click", () => {
    localStorage.setItem('showAdminTypeVehicle', "vans");
    window.location='homeAdmin.html';
});