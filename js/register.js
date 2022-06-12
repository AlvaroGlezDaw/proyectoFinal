comprobarLogin();
document.getElementById("cars").addEventListener("click", () => {
    window.location='http://localhost/proyecto/';
    localStorage.setItem('clickedVehicle', "cars");
});

document.getElementById("bikes").addEventListener("click", () => {
    window.location='http://localhost/proyecto/';
    localStorage.setItem('clickedVehicle', "bikes");
});

document.getElementById("registerForm").addEventListener("submit",()=>{
    window.location.href="http://localhost/proyecto/";
})
