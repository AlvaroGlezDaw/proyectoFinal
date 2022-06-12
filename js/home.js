
let clickedVehicle=localStorage.getItem('clickedVehicle');

comprobarLogin();
if (localStorage.getItem("clickedVehicle") !== null) {
    if (clickedVehicle == "cars") {
        clickCarsButton();
    }
    else if(clickedVehicle == "bikes"){
        clickBikesButton();
    }
    else{
        clickOffersButton();
    }
}
else{
    clickOffersButton();
}

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
    //window.location.href="index.html";
});
