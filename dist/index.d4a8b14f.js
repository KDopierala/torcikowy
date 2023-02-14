window.onscroll = function() {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("mainNav").style.padding = "5px";
        document.getElementsByClassName("navbar__logo")[0].style.maxWidth = "150px";
        document.getElementById("mainNav").classList.add("navbar-shrink");
    } else {
        document.getElementById("mainNav").style.padding = "1rem 1rem";
        document.getElementsByClassName("navbar__logo")[0].style.maxWidth = "200px";
        document.getElementById("mainNav").classList.remove("navbar-shrink");
    }
}

//# sourceMappingURL=index.d4a8b14f.js.map
