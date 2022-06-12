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

function comprobarLogin(){
    if(localStorage.getItem('userLogued')!==null){
        document.getElementById("loginRegister").setAttribute("class", "d-none");
        document.getElementById("loginDates").setAttribute("class", "col-2 d-block");
        document.getElementById("userName").textContent="Bienvenido" + JSON.parse(localStorage.getItem('userLogued')).nombre;
    }
    else{
        document.getElementById("loginDates").setAttribute("class", "d-none");
        document.getElementById("userName").textContent="";
        document.getElementById("loginRegister").setAttribute("class", "col-2 d-block");
    }
}

document.getElementById("logout").addEventListener("click", ()=>{
    localStorage.removeItem('userLogued');
    comprobarLogin();
    window.location.href="../../index.html";
});