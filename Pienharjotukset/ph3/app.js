"use strict"

const btnLaske = document.querySelector("#btnLaske");
const btnTyhjenna = document.querySelector("#btnTyhjenna");

btnLaske.onclick = function() {
    const luku1 = document.querySelector("#luku1").value;
    const luku2 = document.querySelector("#luku2").value;

    const summa = document.querySelector("#summa");
    const erotus = document.querySelector("#erotus");
    const kerto = document.querySelector("#kertolasku");
    const jako = document.querySelector("#jakolasku");

    const lukujenSumma = Number(luku1) + Number(luku2);
    summa.innerHTML = "Lukujen summa on " + lukujenSumma;

    const lukujenErotus = Number(luku1) - Number(luku2);
    erotus.innerHTML = "Lukujen erotus on " + lukujenErotus;

    const lukujenKerto = Number(luku1) * Number(luku2);
    kertolasku.innerHTML = "Lukujen kerto on " + lukujenKerto;

    const lukujenJako = Number(luku1) / Number(luku2);
    jakolasku.innerHTML = "Lukujen jako on " + lukujenJako.toFixed(2);

    return false;
}

btnTyhjenna.onclick = function() {
    document.getElementById("lomake").reset();
}