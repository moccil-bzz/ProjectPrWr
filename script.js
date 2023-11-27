document.addEventListener("DOMContentLoaded", content_loader);

function content_loader(){
    document.getElementById("themeBtn-light").addEventListener("click", changeThemeLight);
    document.getElementById("themeBtn-dark").addEventListener("click", changeThemeDark);
    document.getElementById("hamburgerBtn").addEventListener("click", phoneNav);
    addEventListener("resize", (event) => {
        let x = document.getElementById("phoneNavbar");
        /*console.log(window.innerWidth)*/
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





function castParallax() {

    let opThresh = 350;
    let opFactor = 750;

    /*
        $(window).scroll(function(){
            let windowScroll = $(window).scrollTop();

            $('.keyart_layer.parallax').each(function(){
                let $layer = $(this);
                let yPos = -(windowScroll * $layer.data('speed') / 100);
                $layer.css({
                    "transform" : "translate3d(0px, " + yPos + "px, 0px)"
                });

            });


            let backgroundOpacity = (windowScroll > opThresh ? (windowScroll - opThresh) / opFactor : 0);
            $('#keyart-scrim').css('opacity', backgroundOpacity);
        });

    */
    window.addEventListener("scroll", function(event){

        let top = this.pageYOffset;

        let layers = document.getElementsByClassName("parallax");
        let layer, speed, yPos;
        for (let i = 0; i < layers.length; i++) {
            layer = layers[i];
            speed = layer.getAttribute('data-speed');
            let yPos = -(top * speed / 100);
            layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

        }
    });


}

function dispelParallax() {
    $("#nonparallax").css('display','block');
    $("#parallax").css('display','none');
}

function castSmoothScroll() {
    $.srSmoothscroll({
        step: 80,
        speed: 300,
        ease: 'linear'
    });
}



function startSite() {

    let platform = navigator.platform.toLowerCase();
    let userAgent = navigator.userAgent.toLowerCase();

    if ( platform.indexOf('ipad') != -1  ||  platform.indexOf('iphone') != -1 )
    {
        dispelParallax();
    }

    else if (platform.indexOf('win32') != -1 || platform.indexOf('linux') != -1)
    {
        castParallax();
        if ($.browser.webkit)
        {
            //castSmoothScroll();
        }
    }

    else
    {
        castParallax();
    }

}

document.body.onload = startSite();


let header = document.querySelector('.header');
let navbar = document.querySelector('.sticky-navBar');
let headerOffset = header.offsetHeight;

function checkScroll() {
    if (window.scrollY >= headerOffset) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-125px'; // Adjust as needed
    }
}

window.addEventListener('scroll', checkScroll);






//----------Hamburger Thingy----------//

function phoneNav(){
    let x = document.getElementById("phoneNavbar");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}