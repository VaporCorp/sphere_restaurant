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

const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.header__div-bar');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('open');
    menuBtn.classList.toggle('open');
    menu.classList.toggle('open');
});