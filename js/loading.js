var loadingPart = document.getElementById("loading-part");
window.addEventListener("load", () => {
    var myNewTime = setTimeout(() => {
        loadingPart.style.display = "none";
        document.body.style.height = "auto";
        document.body.style.overflow = "visible";
    }, 500)
})