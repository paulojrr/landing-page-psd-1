let show = true;

const menuSection = document.querySelector('.menu-section');
const menuToggle = menuSection.querySelector('.menu-toggle');
const navList = document.querySelector('.nav__list');

menuToggle.addEventListener('click', function () {
    document.body.style.overflow = show ? "hidden" : "initial";
    menuSection.classList.toggle('on', show);

    show = !show;
})

navList.addEventListener('click', function () {
    if (show == false) {
        document.body.style.overflow = 'initial'
        menuSection.classList.toggle('on', show);
    }
})

