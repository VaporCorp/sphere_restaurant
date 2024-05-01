document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById("imageContainer");
    const images = document.querySelectorAll("img[data-src]");

    function lazyLoadImages() {
        images.forEach(img => {
            const rect = img.getBoundingClientRect();
            if(img.src === "") {
                if (rect.top >= 0 && rect.top <= window.innerHeight + 500) {
                    // Image is within viewport
                    img.src = img.getAttribute("data-src");
                    img.removeAttribute("data-src");
                }
            }
        });
    }

    // Initially load images in view
    lazyLoadImages();

    // Load images when scrolling
    window.addEventListener("scroll", lazyLoadImages);
});
