import { gsap } from "./gsap/gsap-core.js";
import { ScrollTrigger } from "./gsap/ScrollTrigger.js";
import { CSSPlugin } from "./gsap/CSSPlugin.js";
import { CSSRulePlugin } from "./gsap/CSSRulePlugin.js";

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin, CSSPlugin);

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
    start: "top-=100 center",
    end: "bottom bottom",
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

    ScrollTrigger.create({
        trigger: element,
        start: "top-=100 center",
        end: "bottom center",
        onEnter: () => animation.play(),
        once: true
    });
};

h2Elements.forEach(h2 => {
    let newContent = '';
    h2.textContent.trim().split(' ').forEach(word => {
        newContent += `<span class="title__word">${word.split('').map(letter => `<span class="title__letter">${letter === ' ' ? '&nbsp;' : letter}</span>`).join('')}</span> `;
    });
    h2.innerHTML = newContent;
    createAnimation(h2, '.title__letter', 1.5, 0.1);
});

h3Elements.forEach(h3 => {
    let newContent = '';
    h3.textContent.trim().split(' ').forEach(word => {
        newContent += `<span class="title__word">${word}</span> `;
    });
    h3.innerHTML = newContent;
    createAnimation(h3, '.title__word', 1.5, 0.05);
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

function createScrollAnimation(target, yValue, scrollTriggerTarget = '') {
    gsap.from(target, {
        y: yValue,
        scrollTrigger: {
            trigger: scrollTriggerTarget !== '' ? scrollTriggerTarget : target,
            scrub: true,
            start: "top bottom",
            end: "bottom top",
        },
    });
}

createScrollAnimation(".section-menu__div-figure", -250);
createScrollAnimation(".div-figure-dish", 100);
createScrollAnimation(".div-figure-chief", 200);
createScrollAnimation(".div-dishes__figure-1", 150);
createScrollAnimation(".div-dishes__figure-2", 80);
createScrollAnimation(".div-dishes__figure-3", 110);
createScrollAnimation(".div-dishes__figure-4", 60);
createScrollAnimation(".double-images__droite", -100, ".section-double-images");
createScrollAnimation(".double-images__gauche", -60, ".section-double-images");