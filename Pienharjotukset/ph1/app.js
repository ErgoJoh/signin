"use strict"

const btnTulosta = document.querySelector("#btnTulosta");
const btnTyhjenna = document.querySelector("#btnTyhjenna");

btnTulosta.onclick = function () {
    const etunimi = document.querySelector("#etunimi").value;
    const sukunimi = document.querySelector("#sukunimi").value;
    console.log(etunimi + " " + sukunimi);

    const etujasukunimi = document.querySelector("#etujasukunimi");
    etujasukunimi.innerHTML = `Tervehdys ${etunimi} ${sukunimi}`;

    return false;
}