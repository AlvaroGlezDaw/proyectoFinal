function loginChangeNav(){
    if(localStorage.getItem('userLogued')!==null){
        document.getElementById("loginRegister").setAttribute("class", "d-none");
        document.getElementById("loginDates").setAttribute("class", "col-3 d-block");
        document.getElementById("userName").textContent="Bienvenido " + JSON.parse(localStorage.getItem('userLogued')).nombre;
    }
    else{
        document.getElementById("loginDates").setAttribute("class", "d-none");
        document.getElementById("userName").textContent="";
        document.getElementById("loginRegister").setAttribute("class", "col-3 d-block");
    }
}

document.getElementById("logout").addEventListener("click", ()=>{
    localStorage.removeItem('userLogued');
    console.log(window.location.href);
    if(window.location.href==="index.html"){
        window.location.href="index.html";
    }
    else{
        window.location.href="../../index.html";
    }
});