$('.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    nav: true,
    navText: [
        "<button class='btn btn-prevNext me-2 mt-3'><i class='bi bi-arrow-left'></i></button>",
        "<button class='btn btn-prevNext mx-2 mt-3'><i class='bi bi-arrow-right'></i></button>"
    ]
})

var switchInput = document.getElementById("flexSwitchCheckDefault");
var price1 = document.getElementById("price1") // 49$;
var price2 = document.getElementById("price2") // 599$;

var price3 = document.getElementById("price3") // 29$;
var price4 = document.getElementById("price4") // 299$;

var price5 = document.getElementById("price5") // 29$;
var price6 = document.getElementById("price6") // 299$;

// var price1 = document.getElementById("price1") // 49$;
// var price2 = document.getElementById("price2") // 599$;

var perTimes1 = document.getElementById("perTime1");
var perTimes2 = document.getElementById("perTime2");

var perTimes3 = document.getElementById("perTime3");
var perTimes4 = document.getElementById("perTime4");

var perTimes5 = document.getElementById("perTime5");
var perTimes6 = document.getElementById("perTime6");

var test1 = document.getElementById("test1");

// Clicking Event for Switching Year or Month
switchInput.addEventListener("click", () => {
    if (switchInput.hasAttribute("checked")) {
        switchInput.removeAttribute("checked");

        price1.style.top = "10%";
        price2.style.top = "200%";

        price3.style.top = "10%";
        price4.style.top = "200%";

        price5.style.top = "10%";
        price6.style.top = "200%";

        perTimes1.style.top = "20%";
        perTimes2.style.top = "200%";

        perTimes3.style.top = "20%";
        perTimes4.style.top = "200%";

        perTimes5.style.top = "20%";
        perTimes6.style.top = "200%";
    }
    else {
        switchInput.setAttribute("checked", "true");

        price1.style.top = "-100%";
        price2.style.top = "10%";

        price3.style.top = "-100%";
        price4.style.top = "10%";

        price5.style.top = "-100%";
        price6.style.top = "10%";

        perTimes1.style.top = "-100%";
        perTimes2.style.top = "10%";

        perTimes3.style.top = "-100%";
        perTimes4.style.top = "10%";

        perTimes5.style.top = "-100%";
        perTimes6.style.top = "10%";
    }
})