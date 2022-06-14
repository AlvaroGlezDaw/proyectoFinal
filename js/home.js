
let clickedVehicle=localStorage.getItem('clickedVehicle');
loginChangeNav();
if (localStorage.getItem("clickedVehicle") !== null) {
    if (clickedVehicle == "cars") {
        document.getElementById("cars").setAttribute("class", (document.getElementById("cars").getAttribute("class") + " border-4"));
        clickVehicleButton("cars");
    }
    else if(clickedVehicle == "bikes"){
        document.getElementById("bikes").setAttribute("class", (document.getElementById("bikes").getAttribute("class") + " border-4"));
        clickVehicleButton("bikes");
    }
    else{
        document.getElementById("offers").setAttribute("class", (document.getElementById("offers").getAttribute("class") + " border-4"));
        clickVehicleButton("offers");
    }
}
else{
    document.getElementById("offers").setAttribute("class", (document.getElementById("offers").getAttribute("class") + " border-4"));
    clickVehicleButton("offers");
}
