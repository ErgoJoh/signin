"use strict";

const btnTarkista1 = document.querySelector("#btnTarkista1");
const btnTarkista2 = document.querySelector("#btnTarkista2");
const btnTarkista3 = document.querySelector("#btnTarkista3");

btnTarkista1.onclick = function(){
    const luku = document.querySelector("#luku").value;
    const tulos = document.querySelector("#tulos");

    const condition = luku > 4 && luku < 11;
    if (condition) {
        tulos.innerHTML = `Onko ${luku} väliltä 5 - 10? ON`;
    } else {
        tulos.innerHTML = `Onko ${luku} väliltä 5 - 10? EI`; 
    }

    return false;
}

btnTarkista2.onclick = function(){
    const luku = document.querySelector("#luku").value;
    const tulos = document.querySelector("#tulos");

    if (luku < 0 || luku > 100) {
        tulos.innerHTML = "ON TOTTA!";
    } else {
        tulos.innerHTML = "EI OLE TOTTA!";
    }

    return false;
}

btnTarkista3.onclick = function(){
    const luku = document.querySelector("#luku").value;
    const tulos = document.querySelector("#tulos");

    if (luku % 4 == 0 && luku % 100 != 0 || luku % 400 == 0) {
        tulos.innerHTML = "Kyseessä on karkausvuosi!";
    } else {
        tulos.innerHTML = "Kyseessä ei ole karkausvuosi";
    }

    return false;
}