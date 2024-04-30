window.addEventListener('resize', function() {
    let button = document.querySelector('.header__button--booking');
    button.style.top = `${window.innerHeight}px`;
});