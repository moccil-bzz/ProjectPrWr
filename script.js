document.addEventListener("DOMContentLoaded", content_loader);

function content_loader(){
    document.getElementById("themeBtn-light").addEventListener("click", changeThemeLight);
    document.getElementById("themeBtn-dark").addEventListener("click", changeThemeDark);
}

function changeThemeLight() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
}

function changeThemeDark() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";
}
