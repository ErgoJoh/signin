"use strict";

const btnJakojaannos = document.querySelector("#btnJakojaannos");

btnJakojaannos.onclick = function() {
    const luku = document.querySelector("#luku").value;
    const jakojaannos = document.querySelector("#jakojaannos");

    if (luku % 2 == 0) {
        jakojaannos.innerHTML = `luku ${luku} on parillinen`;
    } else {
        jakojaannos.innerHTML = `luku ${luku} on pariton`;
    }

    return false;
}

