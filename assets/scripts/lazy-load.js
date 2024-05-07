function lazyLoadImages() {
    const images = document.querySelectorAll("img[data-src]");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute("data-src");
                    img.removeAttribute("data-src");
                    observer.unobserve(img);
                }
            });
        },
        { rootMargin: "500px 0px" }
    );

    images.forEach((img) => {
        observer.observe(img);
    });
}

document.addEventListener("DOMContentLoaded", lazyLoadImages);
