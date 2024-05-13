window.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    const h3Elements = document.querySelectorAll('.h3-animated-by-word');

    const createAnimation = (element, letterClass, duration, stagger) => {
        const animation = gsap.from(element.querySelectorAll(letterClass), {
            skewX: -50,
            scaleX: 0.5,
            scaleY: 0,
            opacity: 0.5,
            duration,
            stagger,
            paused: true
        });

        ScrollTrigger.create({
            trigger: element,
            start: "top+=150 bottom",
            end: "bottom top",
            onEnter: () => animation.play(),
            once: true
        });
    };

    h3Elements.forEach(h3 => {
        let newContent = '';
        h3.textContent.trim().split(' ').forEach(word => {
            newContent += `<span class="title__word">${word}</span> `;
        });
        h3.innerHTML = newContent;
        createAnimation(h3, '.title__word', 1.5, 0.05);
    });

    function onImageLoad(image, callback) {
        if (image.complete && image.naturalWidth !== 0) {
            callback();
        } else {
            image.addEventListener("load", callback);
        }
    }

    function createScrollAnimation(target, yValue, scrollTriggerTarget, callback) {
        const targetElement = document.querySelector(target);
        const image = targetElement.querySelector("#imageContainer");
        const scrollTriggerElement = scrollTriggerTarget !== '' ? document.querySelector(scrollTriggerTarget) : targetElement;

        if (targetElement && scrollTriggerElement) {
            onImageLoad(image, () => {
                callback();
            });
        }
    }

    function animateElement(target, yValue, scrollTriggerTarget = '') {
        gsap.fromTo(
            target,
            {
                y: -yValue,
            },
            {
                y: yValue,
                scrollTrigger: {
                    trigger: scrollTriggerTarget !== '' ? scrollTriggerTarget : target,
                    scrub: true,
                    start: "top-=100 bottom",
                    end: "bottom top",
                },
            }
        );
    }

    createScrollAnimation(".double-images__droite", -50, ".section-double-images", () => {
        animateElement(".double-images__droite", -50, ".section-double-images");
    });

    createScrollAnimation(".double-images__gauche", -120, ".section-double-images", () => {
        animateElement(".double-images__gauche", -120, ".section-double-images");
    });

    if(window.innerWidth > 768) {
        createScrollAnimation(".div-dishes__figure-1", 150, "", () => {
            animateElement(".div-dishes__figure-1", 150);
        });

        createScrollAnimation(".div-dishes__figure-2", 80, "", () => {
            animateElement(".div-dishes__figure-2", 80);
        });

        createScrollAnimation(".div-dishes__figure-3", 110, "", () => {
            animateElement(".div-dishes__figure-3", 110);
        });

        createScrollAnimation(".div-dishes__figure-4", 60, "", () => {
            animateElement(".div-dishes__figure-4", 60);
        });
    }
})