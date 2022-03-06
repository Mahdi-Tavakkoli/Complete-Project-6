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
var price1 = document.getElementById("price1");
var price2 = document.getElementById("price2");
var price3 = document.getElementById("price3");
var perTimes1 = document.getElementById("perTime1");
var perTimes2 = document.getElementById("perTime2");
var perTimes3 = document.getElementById("perTime3");

switchInput.addEventListener("click", () => {
    if (switchInput.hasAttribute("checked")) {
        switchInput.removeAttribute("checked")
        price1.innerHTML = "$29";
        price2.innerHTML = "$49";
        price3.innerHTML = "$99";

        perTimes1.innerHTML = "Per Month";
        perTimes2.innerHTML = "Per Month";
        perTimes3.innerHTML = "Per Month";
    }
    else {
        switchInput.setAttribute("checked", "true");
        price1.innerHTML = "$299";
        price2.innerHTML = "$599";
        price3.innerHTML = "$1,999";

        perTimes1.innerHTML = "Per Year";
        perTimes2.innerHTML = "Per Year";
        perTimes3.innerHTML = "Per Year";
    }
})