'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

//Cookie
const cookie = document.createElement('div');
cookie.innerHTML = `We use cookies for improved functionality and analytics.<button class="btn btn--close--cookie">Got it!</button>`;
cookie.classList.add('cookie-message');
document.querySelector('.header').append(cookie);

document.querySelector('.btn--close--cookie').addEventListener("click", function () {
    cookie.remove();
});

cookie.style.backgroundColor = "#37383d";
cookie.style.width = "104%";

cookie.style.height = Number.parseFloat(getComputedStyle(cookie).height, 10) + 20 + "px";


//Scroll Behavoir
btnScrollTo.addEventListener("click", function () {
    section1.scrollIntoView({ behavior: "smooth" });
})

document.querySelector('.nav__links').addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains('nav__link')) {
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({ behavior: "smooth" });
    }
})

//Operations
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest('.operations__tab');

    if (!clicked) return;

    tabs.forEach(el => el.classList.remove('operations__tab--active'));
    clicked.classList.add('operations__tab--active');

    tabsContent.forEach(el => el.classList.remove('operations__content--active'));
    document.querySelector(`.operations__content--${clicked.getAttribute('data-tab')}`).classList.add('operations__content--active');

})

//Reducing opacity of links on hover

const nav = document.querySelector('.nav');

const linkHover = function (e) {
    const link = e.target;
    if (link.classList.contains('nav__link')) {
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');
        siblings.forEach(el => {
            if (el != link) {
                el.style.opacity = this;
                logo.style.opacity = this;
            }
        })
    }
}

nav.addEventListener("mouseover", linkHover.bind(0.5));

nav.addEventListener("mouseout", linkHover.bind(1));

//Making sticky nav

const obsCallback = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting)
        document.querySelector('.nav').classList.add('sticky');
    else
        document.querySelector('.nav').classList.remove('sticky');
};

const observer = new IntersectionObserver(obsCallback, { root: null, threshold: 0 })
observer.observe(document.querySelector('.header'));

//swift loading of webpages

const allSections = document.querySelectorAll('section');

const callBack = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(callBack, { root: null, threshold: 0.15 });
allSections.forEach(section => {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});


//lazy loading images

const allImages = document.querySelectorAll('img[data-src]');

const imgCallback = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener("load", function () {
        entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(imgCallback, { root: null, threshold: 0, rootMargin: '-100px' });

allImages.forEach(img => imgObserver.observe(img));


//slider


//putting script tag in head by using defer attribute instead of async and just putting in head because defer defers the execution of script only after the html has been parsed to DOM tree.