comprobarLogin();
document.getElementById("signUp").addEventListener("click", () => {
    let email=document.getElementById("userEmail").value;
    let password=document.getElementById("passwordEmail").value;
    fetch("../../php/users.php", {
        method: 'POST',
        body: JSON.stringify(email)
    }).then(function (respuesta) {
        return respuesta.json();
    }).then(function (data) {
        console.log(data);
        if(data!=null && data !=""){
            document.getElementById("badEmail").setAttribute("class", "d-none");
            if(data[0].password==password){
                document.getElementById("badPassword").setAttribute("class", "d-none");
                localStorage.setItem('userLogued', JSON.stringify(data[0]));
                window.location.href="http://localhost/proyecto/";
            }
            else{
                document.getElementById("badPassword").textContent="La contraseña no coincide con el email";
                document.getElementById("badPassword").setAttribute("class", "text-danger d-block");
            }
        }
        else{
            document.getElementById("badEmail").textContent="El email indicado no existe o el campo esta vacio";
            document.getElementById("badEmail").setAttribute("class", "text-danger d-block");
        }
    }).catch(function (ex) {
        console.log("Error", ex.mesagge)
    });
});