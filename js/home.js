
let clickedVehicle=localStorage.getItem('clickedVehicle');

if (localStorage.getItem("clickedVehicle") !== null) {
    if (clickedVehicle == "cars") {
        clickCarsButton();
    }
    else if(clickedVehicle == "bikes"){
        clickBikesButton();
    }
    else{
        offersVehicles();
    }
}
else{
    offersVehicles();
}