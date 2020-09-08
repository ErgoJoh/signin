"use strict";

const btnSumma = document.querySelector("#btnSumma");
const btnErotus = document.querySelector("#btnErotus");
const btnKerto = document.querySelector("#btnKerto");
const btnJako = document.querySelector("#btnJako");

btnSumma.onclick = function () {
    const luku1 = document.querySelector("#luku1").value;
    const luku2 = document.querySelector("#luku2").value;
    const summa = document.querySelector("#summa")

    const LukujenSumma = Number(luku1) + Number(luku2);
    summa.innerHTML = `${luku1} + ${luku2} = ${LukujenSumma}`;

    //console.log(luku1 + ", " + luku2)

    return false;
}
btnErotus.onclick = function () {
    const luku1 = document.querySelector("#luku1").value;
    const luku2 = document.querySelector("#luku2").value;
    const erotus = document.querySelector("#erotus")

    const LukujenErotus = Number(luku1) - Number(luku2);
    erotus.innerHTML = `${luku1} - ${luku2} = ${LukujenErotus}`;

    return false;
}
btnKerto.onclick = function () {
    const luku1 = document.querySelector("#luku1").value;
    const luku2 = document.querySelector("#luku2").value;
    const kerto = document.querySelector("#kerto")

    const LukujenKerto = Number(luku1) * Number(luku2);
    kerto.innerHTML = `${luku1} x ${luku2} = ${LukujenKerto}`;

    return false;
}
btnJako.onclick = function () {
    const luku1 = document.querySelector("#luku1").value;
    const luku2 = document.querySelector("#luku2").value;
    const jako = document.querySelector("#jako")

    if (luku2 == 0) {
        jako.innerHTML = "Nollalla ei voi jakaa";
    } else {
        const LukujenJako = Number(luku1) / Number(luku2);
        jako.innerHTML = `${luku1} / ${luku2} = ${LukujenJako}`;
    }

    return false;
}