"use strict";

window.addEventListener("load", () => {
    const nav = document.querySelector('#nav');
    const icon = document.querySelector('#icon');

    icon.addEventListener("click",  function (e) {
        document.body.classList.toggle("lock");
        icon.classList.toggle("active");
        nav.classList.toggle("active");
    })
});