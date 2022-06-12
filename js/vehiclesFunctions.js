function getVehiclesByCriteria(vehicleType, brand, fuel, power, price, secondHand) {
    document.getElementById("main").innerHTML = "";
    let vehicleRute=checkVehicleType(vehicleType);
    fetch(vehicleRute, {
        method: 'POST',
        body: JSON.stringify([brand, fuel, power, price, secondHand])
    }).then(function (respuesta) {
        return respuesta.json();
    }).then(function (data) {
        for (let i = 0; i < data.length; i++) {
            //Clonamos la plantilla
            let template = document.getElementById('vehicle-main').content;
            let clone = template.cloneNode(true);

            //Hacemos las modificaciones sobre el objeto clone
            clone.querySelector('.image-vehicle').setAttribute("src", data[i].imagen);

            clone.querySelector('.model').textContent += data[i].modelo;
            clone.querySelector('.price').textContent += data[i].precio + "€";
            clone.querySelector('.maker').innerHTML += "<mon class='font-monospace'>" + data[i].marca + "</mon>";
            clone.querySelector('.power').innerHTML += "<mon class='font-monospace'>" + data[i].potencia + " CV</mon>";
            clone.querySelector('.fuel').innerHTML += "<mon class='font-monospace'>" + data[i].combustible + "</mon>";

            clone.querySelector('article').addEventListener("click", () => {
                let idVehicle = data[i]._id.$oid;
                localStorage.setItem('idVehicleDetail', idVehicle);
            });

            //"colgamos" al objeto clone de algún elemento del DOM
            document.querySelector('.vehicles').appendChild(clone);
        }
    }).catch(function (ex) {
        console.log("Error", ex.mesagge)
    });
}

function checkVehicleType(vehicleType){
    if(vehicleType==="car"){
        return "php/cars.php"
    }
    else{
        return "php/bikes.php"
    }
}


function fillNavCars(vehicleType, brand, fuel, power, price, secondHand) {
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
        filterChange(clone, brand, fuel, power, price, secondHand);
        //"colgamos" al objeto clone de algún elemento del DOM

        clone.querySelector("#secondHandButton").addEventListener("click", ()=>{
            if(localStorage.getItem('userLogued')!==null){
                window.location.href="http://localhost/proyecto/vistas/usuario/vehiculeSecondHandForm.html";
            }
            else{
                window.location.href="http://localhost/proyecto/vistas/usuario/login.html";
            }
        })
        
        document.querySelector('.vehicleMenu').appendChild(clone);
    }).catch(function (ex) {
        console.log("Error", ex.mesagge)
    });
}

function checkVehicleTypeFilter(vehicleType){
    if(vehicleType==="car"){
        return "php/carsFilter.php"
    }
    else{
        return "php/bikesFilter.php"
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