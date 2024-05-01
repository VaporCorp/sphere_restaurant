gsap.registerPlugin(ScrollTrigger)

// Sélection de l'élément texte
const text = document.querySelector('.page__title');

const spans= document.querySelectorAll('.page__title span');

// Pour chaque span trouvé
spans.forEach(function(span) {
    // Récupérer le contenu texte du span
    let text = span.innerText;
    // Créer une chaîne de caractères vide pour stocker les nouvelles balises span
    let newContent = '';

    // Pour chaque lettre dans le contenu texte
    for (let i = 0; i < text.length; i++) {
        // Vérifier si le caractère actuel est vide
        let letterHtml = text[i].trim() ? text[i] : '&nbsp;'; // Si vide, utiliser un espace insécable
        // Envelopper la lettre dans une nouvelle balise span avec la largeur appropriée
        newContent += '<span class="title__letter">' + letterHtml + '</span>';
    }

    // Remplacer le contenu du span par les nouvelles balises span
    span.innerHTML = newContent;
});

// Fonction pour vérifier si un élément est dans la vue
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const animation = gsap.from(".page__title .title__letter", {
    skewX: -50,
    scaleX: 0.5,
    scaleY: 0,
    opacity: 0.5,
    duration: 0.65,
    stagger: 0.05,
    paused: true, // Mettre en pause l'animation par défaut
});

// Vérification si l'élément est déjà dans la vue lors du chargement de la page
if (isElementInViewport(text)) {
    animation.play(); // Lancer l'animation si l'élément est dans la vue
}

// Déclenche l'animation lorsque l'élément entre dans la vue
ScrollTrigger.create({
    trigger: ".div-left__title",
    start: "top+=50 bottom",
    end: "bottom bottom",
    onEnter: () => animation.play()
});

// Sélectionner tous les h2 de la page
const h2Elements = document.querySelectorAll('.text-animated-by-word');

// Pour chaque h2 trouvé
h2Elements.forEach(function(h2) {
    // Récupérer le contenu texte du h2
    let text = h2.textContent.trim();
    // Diviser le texte en mots
    let words = text.split(' ');
    // Créer une chaîne de caractères vide pour stocker les nouvelles balises span
    let newContent = '';

    // Pour chaque mot dans le contenu texte
    words.forEach(function(word) {
        // Ajouter un span autour de chaque mot
        newContent += `<span class="title__word">`;

        // Pour chaque lettre dans le mot
        for (let i = 0; i < word.length; i++) {
            // Vérifier si le caractère actuel est un espace
            let letterHtml = word[i] === ' ' ? '&nbsp;' : word[i]; // Si espace, utiliser un espace insécable
            // Envelopper la lettre dans une nouvelle balise span avec la classe title__letter
            newContent += `<span class="title__letter">${letterHtml}</span>`;
        }

        // Fermer le span autour du mot
        newContent += `</span> `;
    });

    // Remplacer le contenu HTML du h2 par les nouvelles balises span
    h2.innerHTML = newContent;

    // Créer une animation pour le h2
    const animation = gsap.from(h2.querySelectorAll('.title__letter'), {
        skewX: -50,
        scaleX: 0.5,
        scaleY: 0,
        opacity: 0.5,
        duration: 1,
        stagger: 0.1,
        paused: true // Mettre en pause l'animation par défaut
    });

    // Fonction pour vérifier si le h2 est dans la vue
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Créer un ScrollTrigger pour le h2
    ScrollTrigger.create({
        trigger: h2,
        start: "top+=50 bottom",
        end: "bottom center",
        onEnter: () => animation.play(),
        once: true // Pour que l'animation ne se joue qu'une seule fois lorsque l'élément entre dans la vue
    });
});

// Sélectionner tous les h2 de la page
const h3Elements = document.querySelectorAll('.h3-animated-by-word');

// Pour chaque h2 trouvé
h3Elements.forEach(function(h3) {
    // Récupérer le contenu texte du h2
    let h3Text = h3.textContent;
    // Créer une chaîne de caractères vide pour stocker les nouvelles balises span
    let newContent = '';

    // Diviser le texte du h3 en mots en utilisant l'espace comme délimiteur
    const words = h3Text.split(' ');

    // Boucler à travers chaque mot
    words.forEach(word => {
        // Ajouter l'espace si ce n'est pas le premier mot
        if (newContent !== '') {
            newContent += ' ';
        }
        // Englober le mot dans un élément <span> et l'ajouter à la chaîne de contenu
        newContent += `<span class="title__word">${word}</span>`;
    });

    // Remplacer le contenu HTML du h2 par les nouvelles balises span
    h3.innerHTML = newContent;

    // Créer une animation pour le h2
    const animation = gsap.from(h3.querySelectorAll('.title__word'), {
        scale: 0,
        opacity: 0.5,
        duration: 0.5,
        stagger: 0.05,
        paused: true // Mettre en pause l'animation par défaut
    });

    // Fonction pour vérifier si le h2 est dans la vue
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Créer un ScrollTrigger pour le h2
    ScrollTrigger.create({
        trigger: h3,
        start: "top+=100 bottom",
        end: "bottom center",
        onEnter: () => animation.play(),
        once: true // Pour que l'animation ne se joue qu'une seule fois lorsque l'élément entre dans la vue
    });
});

const titleH2_Main = document.querySelector('.div-left__h2');
const childNodesh2Main = titleH2_Main.childNodes;

let nodeh2Main = childNodesh2Main[10];
let nodeh2MainSecond = childNodesh2Main[12];
nodeh2Main.classList.add('gold-text');
nodeh2MainSecond.classList.add('gold-text');

const titleH3_Chief = document.querySelector('.section-chief__title-h3');
const childNodesh3 = titleH3_Chief.childNodes;

let nodeh3 = childNodesh3[2];

nodeh3.classList.add('gold-text');

const titleH2 = document.querySelector('.section-chief__title-h2');
const childNodesh2 = titleH2.childNodes;

// Index à partir duquel commencer
const startIndex = 3;

// Boucle à partir de l'index spécifié jusqu'à la fin des nœuds enfants
for (let i = startIndex; i < childNodesh2.length; i++) {
    const node = childNodesh2[i];
    // Vérifier si le nœud est un élément de type span
    if (node.nodeType === Node.ELEMENT_NODE && node.tagName.toLowerCase() === 'span') {
        // Ajouter une classe à chaque span trouvé
        node.classList.add('gold-text');
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

gsap.from(".section-menu__div-figure", {
    y: -200,
    scrollTrigger: {
        trigger: ".section-menu__div-figure",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
    }
})

gsap.from(".div-figure-dish", {
    y: 100,
    scrollTrigger: {
        trigger: ".div-figure-dish",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
    }
})

gsap.from(".div-figure-chief", {
    y: 150,
    scrollTrigger: {
        trigger: ".div-figure-chief",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
    }
})

gsap.from(".div-dishes__figure-1", {
    y: 150,
    scrollTrigger: {
        trigger: ".div-dishes__figure-1",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
    }
})

gsap.from(".div-dishes__figure-2", {
    y: 80,
    scrollTrigger: {
        trigger: ".div-dishes__figure-2",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
    }
})

gsap.from(".div-dishes__figure-3", {
    y: 110,
    scrollTrigger: {
        trigger: ".div-dishes__figure-3",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
    }
})

gsap.from(".div-dishes__figure-4", {
    y: 60,
    scrollTrigger: {
        trigger: ".div-dishes__figure-4",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
    }
})

gsap.from(".double-images__droite", {
    y: -80,
    scrollTrigger: {
        trigger: ".double-images__droite",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
    }
})

gsap.from(".double-images__gauche", {
    y: -40,
    scrollTrigger: {
        trigger: ".double-images__gauche",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
    }
})