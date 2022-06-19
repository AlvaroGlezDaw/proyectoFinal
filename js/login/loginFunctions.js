function loginChangeNav(){
    if(localStorage.getItem('userLogued')!==null){
        document.getElementById("loginRegister").setAttribute("class", "d-none");
        document.getElementById("loginDates").setAttribute("class", "col-3 d-block");
        document.getElementById("userName").textContent="Bienvenido " + JSON.parse(localStorage.getItem('userLogued')).nombre;
        if(localStorage.getItem('userLogued')!=="user"){
            document.getElementById("panelAdmin").setAttribute("class", "d-inline-block fs-4 bg-warning text-dark border rounded-pill border-dark font-monospace p-1");
        }
        else{
            document.getElementById("panelAdmin").setAttribute("class", "d-none");
        }
    }
    else{
        document.getElementById("loginDates").setAttribute("class", "d-none");
        document.getElementById("userName").textContent="";
        document.getElementById("loginRegister").setAttribute("class", "col-3 d-block");
    }
}

document.getElementById("logout").addEventListener("click", ()=>{
    localStorage.removeItem('userLogued');
    if((window.location.href).includes("index.html")){
        window.location.href="index.html";
    }
    else{
        window.location.href="../../index.html";
    }
});

document.getElementById("panelAdmin").addEventListener("click", ()=>{
    if((window.location.href).includes("index.html")){
        window.location.href="vistas/admin/homeAdmin.html";
    }
    else{
        window.location.href="../admin/homeAdmin.html";
    }
});