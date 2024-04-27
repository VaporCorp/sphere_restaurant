/* Navbar */

let header = document.getElementById("header__navbar");
let scrollDistOpen = 200;

window.addEventListener("scroll", function() {
    let scrollDist = window.scrollY;
    if (scrollDist > scrollDistOpen) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/* Burger menu */

const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.header__div-bar');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('open');
    menuBtn.classList.toggle('open');
    menu.classList.toggle('open');
});

/* Cursor */

const delay = 250

const cursor = document.getElementById("custom-cursor")

const links = document.querySelectorAll("a");

links.forEach(link => {
    link.addEventListener("mouseenter", function() {
        cursor.classList.add("hovered");
    });

    link.addEventListener("mouseleave", function() {
        cursor.classList.remove("hovered");
    });
});

function getDimensions(e) {
    cursor.style.top = `${e.clientY}px` // -25px for the size of the circle
    cursor.style.left = `${e.clientX}px`
}

window.addEventListener("mousemove", (e) => {
    getDimensions(e)
});

function throttle(callback, limit) {
    let wait = false
    return function () {
        if (!wait) {
            callback.apply(null, arguments)
            wait = true
            setTimeout(function () {
                wait = false
            }, limit)
        }
    }
}

window.addEventListener("mousemove", (e) => {
    throttle(getDimensions(e), delay)
});

/* Image scroll and mouse track */

const gallery = document.querySelector('.section-chief__div-dishes');
gallery.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX - gallery.offsetLeft;

    const proportion = mouseX / gallery.offsetWidth;

    const translateX = proportion * 340;

    const images = document.querySelectorAll('.div-dishes__figure');
    images.forEach(function(image) {
        image.style.transform = `translate3d(-${translateX}px, 0px, 0px)`;
    });
});