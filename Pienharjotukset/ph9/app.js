"use strict";

const btnTarkistaLuku = document.querySelector("#btnTarkistaLuku");

btnTarkistaLuku.onclick = function(){
    const luku = document.querySelector("#luku").value;
    const tulos = document.querySelector("#tulos");

    if (luku % 3 == 0 && luku %  5 == 0) {
        tulos.innerHTML = "FizzBuzz";
    } else {
        tulos.innerHTML = luku;
    }

    return false;

}