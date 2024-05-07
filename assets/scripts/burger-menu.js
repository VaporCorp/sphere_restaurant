function loadCSS(file) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = file;
    document.head.appendChild(link);
}
const menuBtn = document.querySelector(".menu-btn"), navBar = document.querySelector(".header__div-bar"),
    menu = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
    if (!menu.classList.contains("open")) {
        loadCSS("assets/styles/burger-menu.css");
    }
    navBar.classList.toggle("open");
    menuBtn.classList.toggle("open");
    menu.classList.toggle("open");
});