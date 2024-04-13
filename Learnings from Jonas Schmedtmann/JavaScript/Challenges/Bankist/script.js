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