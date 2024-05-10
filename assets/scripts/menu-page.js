const element = document.getElementById('section-chief__div-dishes');
const jsFile = '/assets/scripts/image-horizontal-parallax.js';

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