"use strict";

const btnTarkista = document.querySelector("#btnTarkista");
const btnTyhjenna = document.querySelector("#btnTyhjenna");
const rekisteri = document.querySelector("#rekisteri");

btnTarkista.onclick = function () {
    rekisteri.value = rekisteri.value.toUpperCase(); 
    return false;
}

btnTyhjenna.onclick = function() {
    document.getElementById("lomake").reset();
}