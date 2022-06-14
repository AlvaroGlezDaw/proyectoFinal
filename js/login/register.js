if (localStorage.getItem('userLogued') === null) {
loginChangeNav();

document.getElementById("registerForm").addEventListener("submit",()=>{
    window.location.href="http://localhost/proyecto/";
})
}
else {
    window.location.href = "../../index.html";
}
