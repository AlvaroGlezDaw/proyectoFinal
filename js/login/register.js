if (localStorage.getItem('userLogued') === null) {
loginChangeNav();

document.getElementById("registerForm").addEventListener("submit",()=>{
    window.location.href="../../index.html";
})
}
else {
    window.location.href = "../../index.html";
}
