document.getElementById("bikes").addEventListener("click", () => {
    clickBikesButton();
});

function clickBikesButton(){
    localStorage.setItem('clickedVehicle', "bikes");
    document.getElementById("bikes").style.borderWidth="0.25em";
    document.getElementById("cars").style.borderWidth="0.1em";
    let brand = "";
    let fuel = "";
    let power = 50;
    let price = 1000;
    getBikeByCriteria(brand, fuel, power, price);
    fillNavBikes(brand, fuel, power, price);
}

function getBikeByCriteria(brand, fuel, power, price) {
    document.getElementById("main").innerHTML = "";
    fetch("php/bikes.php", {
        method: 'POST',
        body: JSON.stringify([brand, fuel, power, price])
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

function fillNavBikes(brand, fuel, power, price) {
    document.getElementById("nav-left").innerHTML = "";
    fetch("php/bikesFilter.php", {
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
        filterChangeBikes(clone, brand, fuel, power, price);
        //"colgamos" al objeto clone de algún elemento del DOM
        document.querySelector('.vehicleMenu').appendChild(clone);
    }).catch(function (ex) {
        console.log("Error", ex.mesagge)
    });
}

function filterChangeBikes(clone, brand, fuel, power, price) {
    //Evento ONCHANGEFILTER 
    clone.querySelector('#brandFilter').addEventListener("change", () => {
        brand = document.getElementById("brandFilter").value;
        getBikeByCriteria(brand, fuel, power, price);
    });

    //Evento ONCHANGEFILTER 
    clone.querySelector('#fuelFilter').addEventListener("change", () => {
        fuel = document.getElementById("fuelFilter").value;
        getBikeByCriteria(brand, fuel, power, price);
    });

    //Evento ONCHANGEFILTER 
    clone.querySelector('#powerFilter').addEventListener("change", () => {
        power = document.getElementById("powerFilter").value;
        getBikeByCriteria(brand, fuel, power, price);
    });

    //Evento ONCHANGEFILTER 
    clone.querySelector('#priceFilter').addEventListener("change", () => {
        price = document.getElementById("priceFilter").value;
        getBikeByCriteria(brand, fuel, power, price);
    });
}