window.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    const text = document.querySelector('.page__title');
    const spans = document.querySelectorAll('.page__title span');

    spans.forEach(span => {
        const letters = Array.from(span.textContent).map((letter) => {
            const isEmpty = letter.trim() === '';
            return `<span class="title__letter">${isEmpty ? '&nbsp;' : letter}</span>`;
        });
        span.innerHTML = letters.join('');
    });

    const animation = gsap.from(".page__title .title__letter", {
        skewX: -50,
        scaleX: 0.5,
        scaleY: 0,
        opacity: 0.5,
        duration: 0.65,
        stagger: 0.05,
        paused: true,
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animation.play();
                observer.disconnect();
            }
        });
    });

    observer.observe(text);

    ScrollTrigger.create({
        trigger: ".div-left__title",
        start: "top bottom",
        end: "bottom top",
        onEnter: () => animation.play(),
        onEnterBack: () => animation.play(),
    });


    const h2Elements = document.querySelectorAll('.text-animated-by-word');
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

        return animation;
    };

    const observerTitle = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('text-animated-by-word')) {
                    createAnimation(entry.target, '.title__letter', 1.5, 0.1).play();
                } else if (entry.target.classList.contains('h3-animated-by-word')) {
                    createAnimation(entry.target, '.title__word', 1.5, 0.05).play();
                }
                observerTitle.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5, rootMargin: "250px 0px 0px 0px" });

    h2Elements.forEach((h2) => {
        let newContent = '';
        h2.textContent.trim().split(' ').forEach((word) => {
            newContent += `<span class="title__word">${word.split('').map((letter) => `<span class="title__letter">${letter === ' ' ? '&nbsp;' : letter}</span>`).join('')}</span> `;
        });
        h2.innerHTML = newContent;
        observerTitle.observe(h2);
    });

    h3Elements.forEach((h3) => {
        let newContent = '';
        h3.textContent.trim().split(' ').forEach((word) => {
            newContent += `<span class="title__word">${word}</span> `;
        });
        h3.innerHTML = newContent;
        observerTitle.observe(h3);
    });

    const titleH2_Main = document.querySelector('.div-left__h2');
    addGoldClassToNodes(titleH2_Main.childNodes, [10, 12]);

    const titleH3_Chief = document.querySelector('.section-chief__title-h3');
    addGoldClassToNodes(titleH3_Chief.childNodes, [2]);

    const titleH2 = document.querySelector('.section-chief__title-h2');
    addGoldClassToNodes(titleH2.childNodes, [], 3);

    function addGoldClassToNodes(nodes, indices, startIndex = 0) {
        if (indices.length) {
            indices.forEach(index => {
                nodes[index].classList.add('gold-text');
            });
        } else if (startIndex) {
            for (let i = startIndex; i < nodes.length; i++) {
                const node = nodes[i];
                if (node.nodeType === Node.ELEMENT_NODE && node.tagName.toLowerCase() === 'span') {
                    node.classList.add('gold-text');
                }
            }
        }
    }

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

    createScrollAnimation(".div-right__figure", 20, "", () => {
        gsap.fromTo(
            ".div-right__figure",
            {
                y: -60,
            },
            {
                y: 0,
                scrollTrigger: {
                    trigger: ".div-right__figure",
                    scrub: true,
                    start: "top-=100 bottom",
                    end: "bottom top",
                },
            }
        );
    });

    createScrollAnimation(".section-menu__div-figure", 60, "", () => {
        animateElement(".section-menu__div-figure", 60);
    });

    createScrollAnimation(".div-figure-dish", 40, "", () => {
        animateElement(".div-figure-dish", 40);
    });

    createScrollAnimation(".div-figure-chief", -40, "", () => {
        animateElement(".div-figure-chief", -40);
    });

    if(!(window.innerWidth < 768)){
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

    createScrollAnimation(".double-images__droite", -70, ".section-double-images", () => {
        animateElement(".double-images__droite", -70, ".section-double-images");
    });

    createScrollAnimation(".double-images__gauche", -60, ".section-double-images", () => {
        animateElement(".double-images__gauche", -60, ".section-double-images");
    });

    createScrollAnimation(".section-restaurant__div-passionne", -60, ".section-restaurant__div-passionne", () => {
        animateElement(".section-restaurant__div-passionne", -60, ".section-restaurant__div-passionne");
    });
})