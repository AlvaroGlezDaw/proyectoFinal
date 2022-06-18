if (localStorage.getItem('userLogued') === null) {
    loginChangeNav();
}
else {
    window.location.href = "../../index.html";
}
