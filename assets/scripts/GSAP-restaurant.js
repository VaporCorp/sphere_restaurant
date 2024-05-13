window.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    // Sélectionnez le h1 et tous les éléments span dans le h1
    const h1 = document.querySelector("h1");
    const spans = gsap.utils.toArray(".title__span");

// Créez une animation pour chaque span avec un délai
    const tl = gsap.timeline({
        paused: true, // l'animation est initialement en pause
    });

    tl.from(spans, {
        skewX: -50,
        scaleX: 0.5,
        scaleY: 0,
        opacity: 0.5,
        duration: 1.5,
        ease: "power2.inOut", // easing de l'animation
    });

    ScrollTrigger.create({
        trigger: h1, // élément qui déclenche l'animation
        start: "top bottom", // début de la zone de déclenchement
        end: "bottom top", // fin de la zone de déclenchement
        onEnter: () => tl.play(), // démarre l'animation lorsque le h1 entre dans la zone de déclenchement
        once:true,
    });

    // Sélectionnez le h1 et tous les éléments span dans le h1
    const h2 = document.querySelector(".section-menu__title-h2");

    ScrollTrigger.create({
        trigger: h2, // élément qui déclenche l'animation
        start: "top bottom", // début de la zone de déclenchement
        end: "bottom top", // fin de la zone de déclenchement
        onEnter: () => tl.play(), // démarre l'animation lorsque le h1 entre dans la zone de déclenchement
        once:true,
    });

    gsap.set(".title__span-brown", {x: `${window.innerWidth > 600 ? -30 : -10}`});

    gsap.to(".title__span-brown", {
        scrollTrigger: {
            trigger: ".div-left__title",
            scrub: true,
            start: "top+=50 bottom", // Déclencheur au centre de l'élément
            end: "bottom top", // Fin du déclenchement au centre de l'élément
        },
        x: `${window.innerWidth > 992 ? 30 : 10}`,
    });

    gsap.set(".title__span-gold", {x: `${window.innerWidth > 600 ? 30 : 10}`})

    gsap.to(".title__span-gold", {
        scrollTrigger: {
            trigger: ".div-left__title",
            scrub: true,
            start: "top+=50 bottom", // Déclencheur au centre de l'élément
            end: "bottom top", // Fin du déclenchement au centre de l'élément
        },
        x: `${window.innerWidth > 992 ? -30 : -10}`,
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

    createScrollAnimation(".double-image-no-flex-gauche", 50, "", () => {
        animateElement(".double-image-no-flex-gauche", 50);
    });
    createScrollAnimation(".double-image-no-flex-droite", 50, "", () => {
        animateElement(".double-image-no-flex-droite", 50);
    });
    createScrollAnimation(".double-image-flex-gauche", 50, ".section-details__double-image-flex", () => {
        animateElement(".double-image-flex-gauche", 50);
    });
    createScrollAnimation(".double-image-flex-droite", -30, ".section-details__double-image-flex", () => {
        animateElement(".double-image-flex-droite", -30);
    });
})