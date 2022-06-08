document.getElementById("offers").addEventListener("click", () => {
    offersVehicles();
});

function offersVehicles(){
    document.getElementById("main").innerHTML = "";
    fetch("php/offers.php", {
        method: 'GET'
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