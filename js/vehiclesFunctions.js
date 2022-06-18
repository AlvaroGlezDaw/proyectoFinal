function clickVehicleButton(vehicletype){
    localStorage.setItem('clickedVehicle', vehicletype);
    let brand = "";
    let fuel = "";
    let power = 50;
    let price = 0;
    let secondHand = "no";
    getVehiclesByCriteria(vehicletype, brand, fuel, power, price, secondHand);
    fillNavVehicles(vehicletype, brand, fuel, power, price, secondHand);
}
function getVehiclesByCriteria(vehicleType, brand, fuel, power, price, secondHand) {
    document.getElementById("main").innerHTML = "";
    let vehicleRute=checkVehicleType(vehicleType);
    fetch(vehicleRute, {
        method: 'POST',
        body: JSON.stringify([brand, fuel, power, price, secondHand])
    }).then(function (respuesta) {
        return respuesta.json();
    }).then(function (data) {
        if(data.length>0){
            for (let i = 0; i < data.length; i++) {
                //Clonamos la plantilla
                let template = document.getElementById('vehicle-main').content;
                let clone = template.cloneNode(true);

                //Hacemos las modificaciones sobre el objeto clone
                clone.querySelector('.image-vehicle').setAttribute("src", "img/"+data[i].imagenes.imagen0);

                clone.querySelector('.model').textContent += data[i].modelo;
                clone.querySelector('.price').textContent += data[i].precio + "€";
                clone.querySelector('.maker').innerHTML += "<mon class='font-monospace'>" + data[i].marca + "</mon>";
                clone.querySelector('.power').innerHTML += "<mon class='font-monospace'>" + data[i].potencia + " CV</mon>";
                clone.querySelector('.fuel').innerHTML += "<mon class='font-monospace'>" + data[i].combustible + "</mon>";

                clone.querySelector('article').addEventListener("click", () => {
                    //let idVehicle = data[i]._id.$oid;
                    localStorage.setItem('choosenVehicle',  JSON.stringify(data[i]));
                });

                //"colgamos" al objeto clone de algún elemento del DOM
                document.querySelector('.vehicles').appendChild(clone);
            }
        }
        else{
            let noDataContainer=document.createElement("div");
            noDataContainer.setAttribute("class", "col-8 text-center border border-secondary border-3 ms-4 py-3 h-50");

            let noData=document.createElement("p");
            noData.setAttribute("class", "text-dark fs-4");
            noData.innerHTML="Lo sentimos, no hay vehiculos disponibles para esta busqueda";

            let noDataImage=document.createElement("img");
            noDataImage.setAttribute("class", "img-fluid rounded");
            noDataImage.setAttribute("src", "img/vegeta.gif");
            
            noDataContainer.appendChild(noData);
            noDataContainer.appendChild(noDataImage);

            document.getElementById("main").appendChild(noDataContainer);
        }
    }).catch(function (ex) {
        console.log("Error", ex.mesagge)
    });
}

function checkVehicleType(vehicleType){
    if(vehicleType==="cars"){
        return "php/cars.php"
    }
    else if(vehicleType==="bikes"){
        return "php/bikes.php"
    }
    else if(vehicleType==="trucks"){
        return "php/trucks.php"
    }
    else if(vehicleType==="vans"){
        return "php/vans.php"
    }
    else{
        return "php/offers.php"
    }
}

function fillNavVehicles(vehicleType, brand, fuel, power, price, secondHand) {
    document.getElementById("nav-left").innerHTML = "";
    let vehicleFilterRute=checkVehicleTypeFilter(vehicleType);
    fetch(vehicleFilterRute, {
        method: 'GET'
    }).then(function (respuesta) {
        return respuesta.json();
    }).then(function (data) {
        //Clonamos la plantilla
        let template = document.getElementById('card-nav').content;
        let clone = template.cloneNode(true);

        for (let i = 0; i < data.length; i++) {
            let option = document.createElement("option");
            option.text = data[i].marca;
            option.value = data[i].marca;

            clone.querySelector('#brandFilter').appendChild(option)
        }
        filterChange(vehicleType, clone, brand, fuel, power, price, secondHand);

        clone.querySelector("#secondHandButton").addEventListener("click", ()=>{
            if(localStorage.getItem('userLogued')!==null){
                window.location.href="vistas/usuario/vehiculeSecondHandForm.html";
            }
            else{
                window.location.href="vistas/usuario/login.html";
            }
        })
        
        //"colgamos" al objeto clone de algún elemento del DOM
        document.querySelector('.vehicleMenu').appendChild(clone);
    }).catch(function (ex) {
        console.log("Error", ex.mesagge)
    });
}

function checkVehicleTypeFilter(vehicleType){
    if(vehicleType==="cars"){
        return "php/carsFilter.php"
    }
    else if(vehicleType==="bikes"){
        return "php/bikesFilter.php"
    }
    else if(vehicleType==="trucks"){
        return "php/trucksFilter.php"
    }
    else if(vehicleType==="vans"){
        return "php/vansFilter.php"
    }
    else{
        return "php/offersFilter.php"
    }
}

function filterChange(vehicleType, clone, brand, fuel, power, price, secondHand) {
    //Evento ONCHANGEFILTER 
    clone.querySelector('#brandFilter').addEventListener("change", () => {
        brand = document.getElementById("brandFilter").value;
        getVehiclesByCriteria(vehicleType,brand, fuel, power, price, secondHand);
    });

    //Evento ONCHANGEFILTER 
    clone.querySelector('#fuelFilter').addEventListener("change", () => {
        fuel = document.getElementById("fuelFilter").value;
        getVehiclesByCriteria(vehicleType,brand, fuel, power, price, secondHand);
    });

    //Evento ONCHANGEFILTER 
    clone.querySelector('#powerFilter').addEventListener("change", () => {
        power = document.getElementById("powerFilter").value;
        getVehiclesByCriteria(vehicleType, brand, fuel, power, price, secondHand);
    });

    //Evento ONCHANGEFILTER 
    clone.querySelector('#priceFilter').addEventListener("change", () => {
        price = document.getElementById("priceFilter").value;
        getVehiclesByCriteria(vehicleType, brand, fuel, power, price, secondHand);
    });

    //Evento ONCHANGEFILTER 
    clone.querySelector('#secondHandFilter').addEventListener("change", () => {
        if(document.getElementById("secondHandFilter").value==="no")
            document.getElementById("secondHandFilter").value="yes";
        else
            document.getElementById("secondHandFilter").value="no";
        secondHand = document.getElementById("secondHandFilter").value;
        getVehiclesByCriteria(vehicleType, brand, fuel, power, price, secondHand);
    });
}