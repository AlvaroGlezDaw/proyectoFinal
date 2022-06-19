if (localStorage.getItem('userLogued') !== null && JSON.parse(localStorage.getItem('userLogued')).email === "admin@admin") {
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

    document.getElementById("allUsersAdmin").addEventListener("click", ()=>{
        localStorage.setItem('showAdminTypeVehicle', "users");
        window.location='homeAdmin.html';
    })
    
    document.getElementById("newVehicleAdmin").addEventListener("click", ()=>{
        window.location.href="createVehicle.html";
    })

}
else{
    window.location.href = "../../index.html";
}