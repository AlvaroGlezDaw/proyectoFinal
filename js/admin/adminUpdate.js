if (localStorage.getItem('userLogued') !== null && JSON.parse(localStorage.getItem('userLogued')).email === "admin@admin") {
    let idVehicleToUpdate = localStorage.getItem('idVehicleToUpdate');
    let typeVehicle = localStorage.getItem('showAdminTypeVehicle');


    document.getElementById("idVehicle").setAttribute("value", idVehicleToUpdate);

    fetch("../../php/adminSearch.php", {
        method: 'POST',
        body: JSON.stringify(typeVehicle)
    }).then(function (respuesta) {
        return respuesta.json();
    }).then(function (data) {
        console.log(data)

        data.forEach(vehicle => {
            if (vehicle._id.$oid === idVehicleToUpdate) {
                if (typeVehicle === "cars")
                    document.getElementById("typeVehicleUpdate").value = "coche";
                else if (typeVehicle === "bikes")
                    document.getElementById("typeVehicleUpdate").value = "moto";
                else if (typeVehicle === "vans")
                    document.getElementById("typeVehicleUpdate").value = "furgoneta";
                else
                    document.getElementById("typeVehicleUpdate").value = "camion";

                document.getElementById("brandUpdate").setAttribute("value", vehicle.marca);
                document.getElementById("modelUpdate").setAttribute("value", vehicle.modelo);
                document.getElementById("yearUpdate").setAttribute("value", vehicle.anno);
                document.getElementById("powerUpdate").setAttribute("value", vehicle.potencia);
                document.getElementById("ccUpdate").setAttribute("value", vehicle.cilindrada);
                document.getElementById("gearUpdate").value = vehicle.cambio;
                document.getElementById("nDoorsUpdate").setAttribute("value", vehicle.nPuertas);
                document.getElementById("colorUpdate").setAttribute("value", vehicle.color);
                document.getElementById("FuelUpdate").setAttribute("value", vehicle.combustible);
                document.getElementById("FuelUpdate").value = vehicle.combustible;
                document.getElementById("PriceUpdate").setAttribute("value", vehicle.precio);
                document.getElementById("descriptionUpdate").value = vehicle.descripcion;
                document.getElementById("offerUpdate").value = vehicle.offer;
            }
        });
    }).catch(function (ex) {
        console.log("Error", ex.mesagge)
    });
}
else{
        window.location.href = "../../index.html";
}