const menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
    
    const svg = document.querySelector("svg");
    const bars = document.querySelector(".fa-bars");
    const xmark = document.querySelector(".fa-xmark");
    const navs = document.querySelector(".navs");

    if (svg.classList.contains('fa-xmark')) {
        xmark.classList.add("fa-bars");
        navs.style.display = 'none';
    } else {
        bars.classList.add("fa-xmark");
        navs.style.display = 'block';
    }
});

var navs = document.querySelector(".navs");
navs.onclick = function(){ 
    const xmark = document.querySelector(".fa-xmark");
    xmark.classList.add("fa-bars");
    this.style.display = 'none';
}

const elementsToFadeInUpOnScroll = document.querySelectorAll(".fade-in-up-on-scroll");
if (elementsToFadeInUpOnScroll) {
    window.addEventListener("scroll", function(event) {
        elementsToFadeInUpOnScroll.forEach(function(element) {
        if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
            element.classList.add("fade-in-up");
        } else {
            element.classList.remove("fade-in-up");
        }
        });

        if (window.screen.width > 768) {
            if (window.scrollY >= 10) {
                document.querySelector('#navigation').css('margin-top', "0");
            } else {
                document.querySelector('#navigation').css('margin-top', "2em");
            }
        }
    });
} 