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
    if (localStorage.getItem("themeLight") !== null) {
        let value = localStorage.getItem("themeLight")
        if (value === "true"){
            changeThemeLight()
        } else {
            changeThemeDark()
        }
    }
    document.getElementById("themeBtn-light").addEventListener("click", changeThemeLight);
    document.getElementById("themeBtn-dark").addEventListener("click", changeThemeDark);
    document.getElementById("lightThemeBtn").addEventListener("click", changeThemeLight);
    document.getElementById("darkThemeBtn").addEventListener("click", changeThemeDark);
    document.getElementById("hamburgerBtn").addEventListener("click", phoneNav);
    document.getElementById("hamburgerBtnLow").addEventListener("click", phoneNav);
    let checker = false;
    document.getElementById("topicBtn").addEventListener("click", () => {
        if (!checker) {
            document.querySelectorAll(".hidden").forEach((i) => {
                i.classList.remove("hidden");
                i.classList.add("shown");
            });
            document.getElementById("topicBtn").querySelector("i").style.transform = "rotate(-135deg)";
            document.getElementById("topicBtn").style.backgroundColor = "A61B32FF";
            checker = true;
        } else {
            document.querySelectorAll(".shown").forEach((i) => {
                i.classList.remove("shown");
                i.classList.add("hidden");
            });
            document.getElementById("topicBtn").querySelector("i").style.transform = "rotate(45deg)";
            document.getElementById("topicBtn").style.backgroundColor = "380714FF";
            checker = false;
        }

        closeSettingsMenu();
    });

    let checkerSet = false;
    document.getElementById("settingsBtnHam").addEventListener("click", () => {
        if (!checkerSet) {
            document.querySelectorAll(".hiddenSet").forEach((i) => {
                i.classList.remove("hiddenSet");
                i.classList.add("shownSet");
            });
            document.getElementById("settingsBtnHam").querySelector("i").style.transform = "rotate(-135deg)";
            checkerSet = true;
        } else {
            document.querySelectorAll(".shownLang").forEach((i) => {
                i.classList.remove("shownLang");
                i.classList.add("hiddenLang");
            });
            checkerLang = false;
            document.getElementById("languageSetBtn").querySelector("i").style.transform = "rotate(45deg)";

            document.querySelectorAll(".shownTheme").forEach((i) => {
                i.classList.remove("shownTheme");
                i.classList.add("hiddenTheme");
            });
            checkerTheme = false;
            document.getElementById("themeSetBtn").querySelector("i").style.transform = "rotate(45deg)";

            document.querySelectorAll(".shownSet").forEach((i) => {
                i.classList.remove("shownSet");
                i.classList.add("hiddenSet");
            });
            document.getElementById("settingsBtnHam").querySelector("i").style.transform = "rotate(45deg)";
            checkerSet = false;
        }

        closeTopicMenu();
    });

    let checkerTheme = false;
    document.getElementById("themeSetBtn").addEventListener("click", () => {
        if (!checkerTheme) {
            document.querySelectorAll(".hiddenTheme").forEach((i) => {
                i.classList.remove("hiddenTheme");
                i.classList.add("shownTheme");
            });
            document.getElementById("themeSetBtn").querySelector("i").style.transform = "rotate(-135deg)";
            checkerTheme = true;
        } else {
            document.querySelectorAll(".shownTheme").forEach((i) => {
                i.classList.remove("shownTheme");
                i.classList.add("hiddenTheme");
            });
            checkerTheme = false;
            document.getElementById("themeSetBtn").querySelector("i").style.transform = "rotate(45deg)";
        }
    });

    let checkerLang = false;
    document.getElementById("languageSetBtn").addEventListener("click", () => {
        if (!checkerLang) {
            document.querySelectorAll(".hiddenLang").forEach((i) => {
                i.classList.remove("hiddenLang");
                i.classList.add("shownLang");
            });
            document.getElementById("languageSetBtn").querySelector("i").style.transform = "rotate(-135deg)";
            checkerLang = true;
        } else {
            document.querySelectorAll(".shownLang").forEach((i) => {
                i.classList.remove("shownLang");
                i.classList.add("hiddenLang");
            });
            checkerLang = false;
            document.getElementById("languageSetBtn").querySelector("i").style.transform = "rotate(45deg)";
        }
    });

    function closeTopicMenu() {
        document.querySelectorAll(".shown").forEach((i) => {
            i.classList.remove("shown");
            i.classList.add("hidden");
        });
        document.getElementById("topicBtn").querySelector("i").style.transform = "rotate(45deg)";
        document.getElementById("topicBtn").style.backgroundColor = "380714FF";
        checker = false;
    }

    function closeSettingsMenu() {
        document.querySelectorAll(".shownLang").forEach((i) => {
            i.classList.remove("shownLang");
            i.classList.add("hiddenLang");
        });
        checkerLang = false;
        document.getElementById("languageSetBtn").querySelector("i").style.transform = "rotate(45deg)";

        document.querySelectorAll(".shownTheme").forEach((i) => {
            i.classList.remove("shownTheme");
            i.classList.add("hiddenTheme");
        });
        checkerTheme = false;
        document.getElementById("themeSetBtn").querySelector("i").style.transform = "rotate(45deg)";

        document.querySelectorAll(".shownSet").forEach((i) => {
            i.classList.remove("shownSet");
            i.classList.add("hiddenSet");
        });
        document.getElementById("settingsBtnHam").querySelector("i").style.transform = "rotate(45deg)";
        checkerSet = false;

    }

    hovering()
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
            console.log(scrollTop)
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
            let i0ID = truther(".img-0")
            let i1ID = truther(".img-1")
            let i2ID = truther(".img-2")
            let i3ID = truther(".img-3")
            /*console.log(i0ID)
            console.log(i1ID)*/
            stench()
            imgShower(scrollTop, i0ID, i1ID, i2ID, i3ID)
        });
    }
    function dispelParallax() {
        document.getElementById("parallax").style.display = "none";
        document.querySelectorAll(".parallax").forEach( (i) => {
            i.style.display = "none";
        })
    }
    function startSite() {

        let platform = navigator.platform.toLowerCase();
        let userAgent = navigator.userAgent.toLowerCase();

        if ( platform.indexOf('ipad') != -1  ||  platform.indexOf('iphone') != -1 )
        {
            dispelParallax();
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

    //---- Showing the images next to content ----//

    let start_show1 = 575; // the scroll distance from the top when the img becomes visible
    let end_show1 = 750; // scroll distance from top where img becomes invisible
    let start_show2 = 1000;
    let end_show2 = 1400;
    let start_show3 = 1700;
    let end_show3 = 2200;
    let start_show4 = 360;
    let end_show4 = 750;

    function truther(selector) {
        const element = document.querySelector(selector);
        return element !== null;
    }
    // checking if element exists on page, part of scroll event

    function imgShower(scrollTop, dong, yao, shu, liang) { // shows and hides images
        if (dong && (start_show1 <= scrollTop && scrollTop <= end_show1)) {
            /*console.log("state 1 true");*/
            document.querySelector(".img-0").style.opacity = "1";
        } if (dong && (start_show1 > scrollTop || scrollTop > end_show1)) {
            /*console.log("state 1 false")*/
            document.querySelector(".img-0").style.opacity = "0";
        } if (yao && (start_show2 <= scrollTop && scrollTop <= end_show2)) {
            /*console.log("state 2 true");*/
            document.querySelector(".img-1").style.opacity = "1";
        } if (yao && (start_show2 > scrollTop || scrollTop > end_show2)) {
            /*console.log("state 2 false")*/
            document.querySelector(".img-1").style.opacity = "0";
        } if (shu && (start_show3 <= scrollTop && scrollTop <= end_show3)) {
            /*console.log("state 3 true");*/
            document.querySelector(".img-2").style.opacity = "1";
        } if (shu && (start_show3 > scrollTop || scrollTop > end_show3)) {
            /*console.log("state 3 false")*/
            document.querySelector(".img-2").style.opacity = "0";
        } if (liang && (start_show4 <= scrollTop && scrollTop <= end_show4)) {
            /*console.log("state 1 true");*/
            document.querySelector(".img-3").style.opacity = "1";
        } if (liang && (start_show4 > scrollTop || scrollTop > end_show4)) {
            /*console.log("state 1 false")*/
            document.querySelector(".img-3").style.opacity = "0";
        }
    }

    function stench() { // changes values of start_show and end_show so when imgShower goes through all images only the right one will be shown
        if ((window.innerWidth <= 390) && (window.innerHeight <= 845)) { // upstanding iphone 12 pro
            start_show1 = 627
            end_show1 = 776
            start_show2 = 1235;
            end_show2 = 2100;
            start_show3 = 2200;
            end_show3 = 2680;
            start_show4 = 627
            end_show4 = 776
            console.log("2 is true")
        } else if ((window.innerWidth <= 850) && (window.innerHeight <= 390)) { // sideways iphone 12 pro
            start_show1 = 800
            end_show1 = 1150
            start_show2 = 1350;
            end_show2 = 2100;
            start_show3 = 2200;
            end_show3 = 2680;
            start_show4 = 800
            end_show4 = 1450
            console.log("1 is true")
        } else if ((window.innerWidth <= 800) && (window.innerHeight <= 340)) {
            start_show1 = 0
            end_show1 = -1
            start_show2 = 0;
            end_show2 = -1;
            start_show3 = 0;
            end_show3 = -1;
            start_show4 = 0
            end_show4 = -1
        } else if ((window.innerWidth <= 450) && (window.innerHeight <= 900)) {
            start_show1 = 0
            end_show1 = -1
            start_show2 = 0;
            end_show2 = -1;
            start_show3 = 0;
            end_show3 = -1;
            start_show4 = 0
            end_show4 = -1
        } else {
            start_show1 = 575
            end_show1 = 750
            start_show2 = 1000;
            end_show2 = 1400;
            start_show3 = 1700;
            end_show3 = 2200;
            start_show4 = 360
            end_show4 = 750
        } // all special values are set with ifs and if none of them apply, back to default
    }

    let isMouseOverJoe = false;
    let isMouseOverMama = false;
    let isMouseOverSet = false;
    let sBtn = document.getElementById("settingsBtn");
    let dBu = document.getElementById("joe");
    console.log(dBu)
    let dBd = document.getElementById("mama");
    console.log(dBd)

    dBu.addEventListener('mouseover', function() {
        console.log("JOOOO")
        let anchor = dBu.querySelector("a");
        let lefts = anchor.querySelectorAll(".left");
        isMouseOverJoe = true;
        lefts.forEach((x) => {
            x.style.transform = "rotate(-45deg)";
        })
    });

    dBd.addEventListener('mouseover', function() {
        console.log("JOOOO")
        let anchor = dBd.querySelector("a");
        let lefts = anchor.querySelectorAll(".left");
        isMouseOverMama = true;
        lefts.forEach((x) => {
            x.style.transform = "rotate(-45deg)";
        })
    });
    /*
    sBtn.addEventListener('mouseover', function() {
        console.log("EEEEE")
        let downs = sBtn.querySelectorAll(".down");
        isMouseOverSet = true;
        downs.forEach((x) => {
            x.style.transform = "rotate(-135deg)";
        })
    });

     */

    dBu.addEventListener('mouseout', function() {
        let anchor = dBu.querySelector("a");
        let lefts = anchor.querySelectorAll(".left");
        isMouseOverJoe = false;
        lefts.forEach((x) => {
            x.style.transform = "rotate(135deg)";
        })
    });

    dBd.addEventListener('mouseout', function() {
        let anchor = dBd.querySelector("a");
        let lefts = anchor.querySelectorAll(".left");
        isMouseOverMama = false;
        lefts.forEach((x) => {
            x.style.transform = "rotate(135deg)";
        })
    });
    /*
    sBtn.addEventListener('mouseout', function() {
        console.log("OOOOOO")
        let downs = sBtn.querySelectorAll(".down");
        isMouseOverSet = false;
        downs.forEach((x) => {
            x.style.transform = "rotate(45deg)";
        })
    });

     */

    document.body.onload = startSite();

//-------------MARKOS STUFF END NO TOUCHYYY!!!!-------------//

    function changeThemeLight() {
        if (localStorage.getItem("themeLight") !== null) {
            localStorage.removeItem("themeLight")
        }
        localStorage.setItem("themeLight", "true")
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
        if (document.getElementById("credits-left")) {
            document.getElementById("credits-left").src = './img/credits%20left%20transp%201%20og.png';
        }
        if (document.getElementById("credits-right")) {
            document.getElementById("credits-right").src = './img/credits%20right%20transp%201%20og.png';
        }
        if (document.getElementById("beginningsImg")){
            document.getElementById("beginningsImg").src = '../img/beginnings_1_bl.png';
        }
        if (document.getElementById("beginningsImg1")){
            document.getElementById("beginningsImg1").src = '../img/idaf prwr wgcwzwm intro icon 2 bl.png';
        }
        if (document.getElementById("beginningsImg2")) {
            document.getElementById("beginningsImg2").src = '../img/idaf prwr wgcwzwm intro icon 3 bl.png';
        }
        if (document.getElementById("beginningsImg3")) {
            document.getElementById("beginningsImg3").src = '../img/idaf prwr wgcwzwm intro icon 4 bl.png';
        }
        document.querySelectorAll(".dropdown-darkTheme").forEach((i) => {
            i.classList.remove("dropdown-darkTheme");
            i.classList.add("dropdown-lightTheme");
        });
        document.querySelectorAll(".arrowColorDark").forEach((i) => {
            i.classList.remove("arrowColorDark");
            i.classList.add("arrowColorLight");
        });
        document.querySelectorAll(".fontColorDark").forEach((i) => {
            i.classList.remove("fontColorDark");
            i.classList.add("fontColorLight");
        });
    }

    function changeThemeDark() {
        if (localStorage.getItem("themeLight") !== null) {
            localStorage.removeItem("themeLight")
        }
        localStorage.setItem("themeLight", "false")
        document.getElementsByTagName("body")[0].style.backgroundColor = "#1F1F1FFF";
        if (document.getElementById("credits-left")){
            document.getElementById("credits-left").src = './img/credits%20left%20transp%20og%201%20dm.png';
        }
        if (document.getElementById("credits-right")){
            document.getElementById("credits-right").src = './img/credits%20right%20transp%20og%201%20dm.png';
        }
        if (document.getElementById("beginningsImg")){
            document.getElementById("beginningsImg").src = '../img/beginnings_1_wh.png';
        }
        if (document.getElementById("beginningsImg1")){
            document.getElementById("beginningsImg1").src = '../img/idaf prwr wgcwzwm intro icon 2 wh.png';
        }
        if (document.getElementById("beginningsImg2")){
            document.getElementById("beginningsImg2").src = '../img/idaf prwr wgcwzwm intro icon 3 wh.png';
        }
        if (document.getElementById("beginningsImg3")){
            document.getElementById("beginningsImg3").src = '../img/idaf prwr wgcwzwm intro icon 4 wh.png';
        }
        document.querySelectorAll(".dropdown-lightTheme").forEach((i) => {
            i.classList.remove("dropdown-lightTheme")
            i.classList.add("dropdown-darkTheme");
        });
        document.querySelectorAll(".arrowColorLight").forEach((i) => {
            i.classList.remove("arrowColorLight");
            i.classList.add("arrowColorDark");
        });
        document.querySelectorAll(".fontColorLight").forEach((i) => {
            i.classList.remove("fontColorLight");
            i.classList.add("fontColorDark");
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

//---------------hovering settings btn------------//
function hovering(){
    let sBtn = document.getElementById("settingsBtn");
    let downs = sBtn.querySelectorAll(".down");
    let navButton = document.getElementsByClassName("navButtons")[0];
    let dropdown = document.querySelector('.dropdown');
    let dropdownContent = document.querySelector('.dropdown-content');
    let cog = document.querySelectorAll('.settings-cog')[0];
    let test = false;


    navButton.addEventListener("mouseover", () => {
        dropdownContent.style.top = '125px'
        dropdownContent.style.opacity = '100%';
        dropdownContent.style.boxShadow = '0 8px 16px 0 rgba(0,0,0,0.2)';
        cog.style.transform = 'rotate(180deg)';
        test = true;
        downs.forEach((x) => {
            x.style.transform = "rotate(-135deg)";
        })
    })
    navButton.addEventListener("click", () => {
        if (!test) {
            dropdownContent.style.top = '125px'
            dropdownContent.style.opacity = '100%';
            dropdownContent.style.boxShadow = '0 8px 16px 0 rgba(0,0,0,0.2)';
            cog.style.transform = 'rotate(180deg)';
            test = true;
            downs.forEach((x) => {
                x.style.transform = "rotate(-135deg)";
            })
        } else {
            dropdownContent.style.opacity = '0';
            dropdownContent.style.top = '0';
            cog.style.transform = 'rotate(0)';
            cog.style.transition = '1';
            test = false;
            downs.forEach((x) => {
                x.style.transform = "rotate(45deg)";
            })
        }
    });
    document.addEventListener('click', function(event) {
        let isClickInside = dropdown.contains(event.target);
        if (!isClickInside) {
            dropdownContent.style.opacity = '0';
            dropdownContent.style.top = '0';
            cog.style.transform = 'rotate(0)';
            cog.style.transition = '1';
            downs.forEach((x) => {
                x.style.transform = "rotate(45deg)";
            })
        }
    });
}