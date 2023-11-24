document.addEventListener("DOMContentLoaded", content_loader);

function content_loader(){
    document.getElementById("themeBtn-light").addEventListener("click", changeThemeLight);
    document.getElementById("themeBtn-dark").addEventListener("click", changeThemeDark);
    document.getElementById("hamburgerBtn").addEventListener("click", phoneNav);
    addEventListener("resize", (event) => {
        let x = document.getElementById("phoneNavbar");
        if (window.innerWidth > 1170 && x.style.display === "flex") {
            x.style.display = "none";
        }
    });
}

function changeThemeLight() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    document.getElementById("credits-left").src = './img/credits%20left%20transp%201%20og.png';
    document.getElementById("credits-right").src = './img/credits%20right%20transp%201%20og.png';
    document.querySelectorAll(".dropdown-darkTheme").forEach((i) => {
        i.classList.remove("dropdown-darkTheme");
        i.classList.add("dropdown-lightTheme");
    });
    document.querySelectorAll(".arrowColorDark").forEach((i) => {
        i.classList.remove("arrowColorDark");
        i.classList.add("arrowColorLight");
    });
}

function changeThemeDark() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#1F1F1FFF";
    document.getElementById("credits-left").src = './img/credits%20left%20transp%20og%201%20dm.png';
    document.getElementById("credits-right").src = './img/credits%20right%20transp%20og%201%20dm.png';
    document.querySelectorAll(".dropdown-lightTheme").forEach((i) => {
        i.classList.remove("dropdown-lightTheme")
        i.classList.add("dropdown-darkTheme");
    });
    document.querySelectorAll(".arrowColorLight").forEach((i) => {
        i.classList.remove("arrowColorLight");
        i.classList.add("arrowColorDark");
    });
}

function phoneNav(){
    let x = document.getElementById("phoneNavbar");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}