if (localStorage.getItem('userLogued') !== null && JSON.parse(localStorage.getItem('userLogued')).email !== "admin@admin") {
    loginChangeNav();
}
else {
    window.location.href = "../../index.html";
}