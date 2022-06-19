if(localStorage.getItem('showAdminTypeVehicle')==="cars"){
    searchVehiclesForAdmin("cars");
}
else if(localStorage.getItem('showAdminTypeVehicle')==="bikes"){
    searchVehiclesForAdmin("bikes");
}
else if(localStorage.getItem('showAdminTypeVehicle')==="trucks"){
    searchVehiclesForAdmin("trucks");
}
else{
    searchVehiclesForAdmin("vans");
}


document.getElementById("newVehicleAdmin").addEventListener("click", ()=>{
    window.location.href="createVehicle.html";
})


function searchVehiclesForAdmin(vehicleType){
    document.getElementById("infoContainerAdmin").innerHTML="";
    fetch("../../php/adminSearch.php", {
        method: 'POST',
        body: JSON.stringify(vehicleType)
    }).then(function (respuesta) {
        return respuesta.json();
    }).then(function (data) {
        console.log(data);
        let listVehicle=document.createElement('ul');
        listVehicle.setAttribute("class","list-group");
        for (let i = 0; i < data.length; i++) {
            let buttonUpdate="";
            let listItem=document.createElement('li');
            listItem.setAttribute("id",data[i]._id.$oid);
            listItem.setAttribute("class","list-group-item");
            if(data[i].segunda_mano==="no"){
                buttonUpdate="<div id='"+data[i]._id.$oid+"' class='updateVehicles offset-2 col-1 me-4 btn btn-success'><svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='currentColor' class='bi bi-pencil' viewBox='0 0 16 16'>"
                + "<path d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z'/>"
                + "</svg></div>"
            }
            else{
                buttonUpdate="<div style=' pointer-events: none; opacity: 0.5; background: #CCC;' id='"+data[i]._id.$oid+"' class='updateVehiclesDisabled offset-2 col-1 me-4 btn btn-success'><svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='currentColor' class='bi bi-pencil' viewBox='0 0 16 16'>"
                + "<path d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z'/>"
                + "</svg></div>"
            }

            listItem.innerHTML="<div class='row'><span class='col-7'>" + data[i].modelo +" | Segunda Mano: "+ data[i].segunda_mano+"</span>"
            + buttonUpdate
            + "<div id='"+data[i]._id.$oid+"' class='deleteVehicles col-1 btn btn-danger'><svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='currentColor' class='bi bi-trash text-light' viewBox='0 0 16 16'>"
            + "<path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/>"
            + "<path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/>"
            + "</svg></div></div>";

            listVehicle.appendChild(listItem);

        }
        document.getElementById("infoContainerAdmin").appendChild(listVehicle);

        updateElements=document.getElementsByClassName("updateVehicles");
        for(let element of updateElements) {
            element.addEventListener("click",()=>{
                localStorage.setItem("idVehicleToUpdate", element.id);
                window.location.href="updateVehicle.html"; 
            });
        }

        deleteElements=document.getElementsByClassName("deleteVehicles");
        for(let element of deleteElements) {
            element.addEventListener("click",()=>{
                deleteVehicle(element.id, vehicleType); 
                searchVehiclesForAdmin(vehicleType);
            });
        }
    }).catch(function (ex) {
        console.log("Error", ex.mesagge)
    });
}

function deleteVehicle(idVehicle, vehicleType){
    fetch("../../php/adminDelete.php", {
        method: 'POST',
        body: JSON.stringify([idVehicle, vehicleType])
    }).then(function (respuesta) {
        return respuesta.json();
    }).then(function (data) {
    }).catch(function (ex) {
        console.log("Error", ex.mesagge)
    });
}