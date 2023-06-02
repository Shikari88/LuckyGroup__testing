"use strict";

window.addEventListener("load", ()=> {
    const control = document.querySelector("#search");
    let forbiddenSym = /[!@#$%^&*()]/g;
    control.oninput = function () {
        control.setAttribute("minlength", "4");
        if(this.value.match(forbiddenSym)){
            this.value = this.value.replace(forbiddenSym, "");
        }
    }
});