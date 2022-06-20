//null o admin
if (localStorage.getItem('userLogued') !== null && JSON.parse(localStorage.getItem('userLogued')).email !== "admin@admin") {
    loginChangeNav();
    let choosenVehicle = JSON.parse(localStorage.getItem('choosenVehicle'));

    let userinfo = JSON.parse(localStorage.getItem('userLogued'));

    document.getElementById("idVehicle").setAttribute("value", choosenVehicle._id.$oid);
    document.getElementById("vehiclePrice").innerHTML = choosenVehicle.precio + "€";

    document.getElementById("userDataName").innerHTML += "<mon class='font-monospace'>" + userinfo.nombre + "</mon>";
    document.getElementById("userDataLastName").innerHTML += "<mon class='font-monospace'>" + userinfo.nombre + "</mon>";
    document.getElementById("userEmail").innerHTML += "<mon class='font-monospace'>" + userinfo.email + "</mon>";
    document.getElementById("userDirection").innerHTML += "<mon class='font-monospace'>" + userinfo.direccion + "</mon>";

    document.getElementById("submitForm").addEventListener('click', ()=>{
        document.payVehicle.submit();
        sendEmail(userinfo.email, choosenVehicle.marca);
    })

    document.getElementById("submitFormPayPal").addEventListener('click', ()=>{
        document.payVehicle.submit();
        sendEmail(userinfo.email, choosenVehicle.marca);
    })

    //Funcion que manda un email a "Elastic email".
    //Configurada mediante un token creado por https://smtpjs.com/ y utilizando un servidor "smtp" en "Elastic email"
    function sendEmail(userEmail, brandVehicle) {
        Email.send({
            SecureToken : "4b239979-0b0b-4b07-ba2d-a6e175878bae",
            To : userEmail,
            From : "ggi83428@educastur.es",
            Subject : "Compra del vehiculo " + brandVehicle,
            Body : "Hola, email de confirmacion de la compra del vehiculo : " + brandVehicle
        }).then(
          message => alert(message)
        );
    }
}
else {
    window.location.href = "../../index.html";
}
