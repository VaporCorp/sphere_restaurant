gsap.registerPlugin(ScrollTrigger)

// Sélectionner tous les h2 de la page
const h2Elements = document.querySelectorAll('.text-animated-by-word');

// Pour chaque h2 trouvé
h2Elements.forEach(function(h2) {
    // Récupérer le contenu texte du h2
    let h2Text = h2.textContent;
    // Créer une chaîne de caractères vide pour stocker les nouvelles balises span
    let newContent = '';

    // Diviser le texte du h2 en mots en utilisant l'espace comme délimiteur
    const words = h2Text.split(' ');

    // Boucler à travers chaque mot
    words.forEach(word => {
        // Ajouter l'espace si ce n'est pas le premier mot
        if (newContent !== '') {
            newContent += '&nbsp;';
        }
        // Englober le mot dans un élément <span> et l'ajouter à la chaîne de contenu
        newContent += `<span class="title__word">${word}</span>`;
    });

    // Remplacer le contenu HTML du h2 par les nouvelles balises span
    h2.innerHTML = newContent;

    // Créer une animation pour le h2
    const animation = gsap.from(h2.querySelectorAll('.title__word'), {
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
        trigger: h2,
        start: "top+=100 bottom",
        end: "bottom center",
        onEnter: () => animation.play(),
        once: true // Pour que l'animation ne se joue qu'une seule fois lorsque l'élément entre dans la vue
    });
});