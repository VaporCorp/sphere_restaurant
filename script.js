const element = document.getElementById('section-chief__div-dishes');
const jsFile = './assets/scripts/image-horizontal-parallax.js';

function loadJS(file) {
    const script = document.createElement('script');
    script.src = file;
    script.onload = function() {
        // Call the main function or initialize your script here
        initImageHorizontalParallax();
    };
    document.body.appendChild(script);
}

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
                loadJS(jsFile);
                observer.disconnect();
            }
        });
    },
    { rootMargin: '-200px 0px' }
);

observer.observe(element);


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[data-css]");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting || entry.intersectionRatio > 0) {
                    const section = entry.target;
                    const cssFile = section.getAttribute("data-css");
                    loadCSS(cssFile);
                    observer.unobserve(section);
                }
            });
        },
        { rootMargin: "200px 0px" } // Ajuster la valeur pour définir à quelle distance la section doit être du viewport
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

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
});