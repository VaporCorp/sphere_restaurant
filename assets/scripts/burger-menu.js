function loadCSS(file) {
    const link = document.createElement("link");
    link.rel = "stylesheet";

    const currentPath = window.location.pathname;
    const isInPagesDirectory = currentPath.includes("/pages/");

    if (isInPagesDirectory) {
        link.href = `../${file}`;
    } else {
        link.href = file;
    }

    document.head.appendChild(link);
}
const menuBtn = document.querySelector(".menu-btn"), navBar = document.querySelector(".header__div-bar"),
    menu = document.querySelector(".menu"), body = document.querySelector("body");
menuBtn.addEventListener("click", () => {
    if (!menu.classList.contains("open")) {
        loadCSS("assets/styles/burger-menu.css");
    }
    navBar.classList.toggle("open");
    menuBtn.classList.toggle("open");
    menu.classList.toggle("open");
    body.classList.toggle("open");
});

document.addEventListener('DOMContentLoaded', function() {
    let imageContainer = document.querySelector('.image-container');
    let navItems = document.querySelectorAll('.nav-item');

    // Tableau d'objets contenant les liens et les images correspondantes
    let navData = [
        { link: './pages/menu.html', image: '/assets/images/restaurant-paris-sphere-plat-DSC6519.webp' },
        { link: './pages/restaurant-gastronomique.html', image: '/assets/images/sphere-restaurant-salle-DSC0429-1600x1066.webp' },
        { link: 'https://bookings.zenchef.com/shop?rid=358497', image: '/assets/images/menu-item.webp' },
        { link: './pages/presse.html', image: '/assets/images/restaurant-sphere-paris-8-ambiance-3.webp' },
        { link: './pages/contact.html', image: '/assets/images/sphere-restaurant-paris-chef-DSC0523.webp' }
    ];

    navItems.forEach(function(navItem, index) {
        let imageContainer = navItem.querySelector('.image-container');

        navItem.addEventListener('mousemove', function(e) {
            let image = navData[index].image;
            imageContainer.style.backgroundImage = 'url(' + image + ')';
            window.scrollTo({top: 0});
            imageContainer.style.left = e.pageX - 600 + 'px'; // ajustez cette valeur pour le décalage
            imageContainer.style.top = e.pageY - 100 + 'px'; // ajustez cette valeur pour le décalage
            imageContainer.classList.add('show');
        });

        navItem.addEventListener('mouseleave', function() {
            imageContainer.classList.remove('show');
        });
    });
});
