
let clickedVehicle=localStorage.getItem('clickedVehicle');
comprobarLogin();
if (localStorage.getItem("clickedVehicle") !== null) {
    if (clickedVehicle == "cars") {
        clickVehicleButton("cars");
    }
    else if(clickedVehicle == "bikes"){
        clickVehicleButton("bikes");
    }
    else{
        clickVehicleButton("offers");
    }
}
else{
    clickVehicleButton("offers");
}
