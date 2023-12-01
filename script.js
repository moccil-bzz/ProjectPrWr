document.addEventListener("DOMContentLoaded", content_loader);
let swiggity;
let swooty;
function changer() {
    if (window.innerWidth <= 1350) {
        swiggity = "15px";
        swooty = "15px";
    } else {
        swiggity = "20px";
        swooty = "15px";
    }
}
changer()

function content_loader(){
    document.getElementById("themeBtn-light").addEventListener("click", changeThemeLight);
    document.getElementById("themeBtn-dark").addEventListener("click", changeThemeDark);
    document.getElementById("hamburgerBtn").addEventListener("click", phoneNav);
    document.getElementById("hamburgerBtnLow").addEventListener("click", phoneNav);
    navSquisher(window.scrollY)

    addEventListener("resize", (event) => {
        let x = document.getElementById("phoneNavbar");
        if (window.innerWidth > 1170) {
            x.style.display = "none";
        } else {
            x.style.display = "flex";
        }
        changer()
        navSquisher(window.scrollY)
    });
    //-------------MARKOS STUFF START NO TOUCHYYY!!!!-------------//
    let header = document.querySelector(".header");

    function checkScroll(scroller) {
        let hamburgerBtn = document.getElementById("hamburgerBtnLow");
        if (scroller >= 91) {
            hamburgerBtn.style.opacity = "100";
            hamburgerBtn.style.pointerEvents = "All";
        } else {
            hamburgerBtn.style.opacity = "0"; // Adjust as needed
            hamburgerBtn.style.pointerEvents = "None";
        }}



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
            let scrollTop = window.scrollY;

            let layers = document.getElementsByClassName("parallax");
            let layer, speed, yPos;
            for (let i = 0; i < layers.length; i++) {
                layer = layers[i];
                speed = layer.getAttribute('data-speed');
                let yPos = -(top * speed / 100);
                layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

            }
            checkScroll(scrollTop)
            navSquisher(scrollTop)
        });
}
    function dispelParallax() {
        $("#nonparallax").css('display','block');
        $("#parallax").css('display','none');
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
    let isMouseOver = false;
    let naviTextList = document.querySelectorAll(".sticky-navBar a");


    // Add a mouseover event listener to the element
    naviTextList.forEach((i) => {
        i.addEventListener('mouseover', function() {

            // Set the boolean variable to true when mouseover occurs
            isMouseOver = true;
            i.style.fontSize = swiggity;
            i.firstElementChild.style.padding = swooty;
            //console.log('Mouse over the element!');
        });
    });

    naviTextList.forEach((i) => {
        i.addEventListener('mouseout', function() {
            // Set the boolean variable to true when mouseover occurs
            let scrollTop = window.scrollY;
            if (scrollTop >= 175) {
                i.style.fontSize = "0"
                i.firstElementChild.style.padding = "10px 50px";
            } else {
                i.style.fontSize = swiggity;
                i.firstElementChild.style.padding = swooty;
            }
            isMouseOver = false;
            //console.log('Mouse out of the element!');
        });
    });

    function navSquisher(scroller) {
        let naviTextList = document.querySelectorAll(".sticky-navBar a");
        let navBar = document.querySelector(".sticky-navBar");
        //console.log(window.scrollY)
        //console.log(window.innerWidth);
        naviTextList.forEach((i) => {
            if (scroller >= 175) {
                i.style.fontSize = "0";
                i.firstElementChild.style.padding = "10px 50px";
                navBar.style.paddingLeft = "230px";
                navBar.style.paddingRight = "230px";
            } else {
                i.style.fontSize = swiggity;
                i.firstElementChild.style.padding = swooty;
                navBar.style.paddingLeft = "0";
                navBar.style.paddingRight = "0";
            }
        })
    }

    let isMouseOver2 = false;
    let dropdownBtns = document.querySelectorAll(".dropdown-theme");
    let lefts = document.querySelectorAll(".left");

    dropdownBtns.forEach((i) => {
        i.addEventListener('mouseover', function() {
            isMouseOver2 = true;
            lefts.forEach((x) => {
                x.style.transform = "rotate(-45deg)";
            })
        });
    });

    dropdownBtns.forEach((i) => {
        i.addEventListener('mouseout', function() {
            isMouseOver2 = false;
            lefts.forEach((x) => {
                x.style.transform = "rotate(135deg)";
            })
        });
    });

document.body.onload = startSite();

//-------------MARKOS STUFF END NO TOUCHYYY!!!!-------------//

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



}



//----------Hamburger Thingy----------//

function phoneNav(){
    let x = document.getElementById("phoneNavbar");
    if (x.style.opacity === "100") {
        x.style.opacity = "0";
        x.style.pointerEvents = "none";
    } else {
        x.style.opacity = "100";
        x.style.pointerEvents = "all";
    }
}