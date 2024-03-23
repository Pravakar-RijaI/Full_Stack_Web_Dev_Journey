'use strict';

let showModalBtn = document.querySelectorAll('.show-modal');
let modalWindow = document.querySelector('.modal-window');
let closeModalBtn = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');

const showModal = function () {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < showModalBtn.length; i++) {
    showModalBtn[i].addEventListener("click", showModal);
}

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
    if (!modalWindow.classList.contains("hidden") && event.key === "Escape")
        closeModal();
});
