const g = document.querySelector(".section-chief__div-dishes");
g.addEventListener("mousemove", function (e) {
    if (window.innerWidth >= 992) {
        let t = e.clientX - g.offsetLeft, l = t / g.offsetWidth, r = 340 * l,
            s = document.querySelectorAll(".div-dishes__figure");
        s.forEach(function (e) {
            e.style.transform = `translate3d(-${r}px, 0px, 0px)`
        })
    }
});