"use strict";

// Painikkeet muuttujiin
const btnLaske = document.querySelector("#btnLaske");
const btnTyhjenna = document.querySelector("#btnTyhjenna");

// Laske-painikkeen toiminnallisuus
btnLaske.onclick = function() {
    const luku1 = document.querySelector("#luku1").value;
    const luku2 = document.querySelector("#luku2").value;

    //console.log(luku1 + "," + luku2);

    const summa = document.querySelector("#summa");
    const keskiarvo = document.querySelector("#keskiarvo");
    const vertailu = document.querySelector("#vertailu");

    const lukujenSumma = Number(luku1) + Number(luku2);
    summa.innerHTML = "Lukujen summa on " + lukujenSumma;

    const lukujenKeskiarvo = lukujenSumma / 2;
    keskiarvo.innerHTML = "Lukujen keskiarvo on " + lukujenKeskiarvo;

    vertailu.innerHTML = vertaile(Number(luku1), (luku2));

    return false;
}

btnTyhjenna.onclick = function() {
    document.getElementById("lomake").reset();
}

function vertaile(_luku1, _luku2){
    if (_luku1 < _luku2) {
        return `luku ${_luku2} > ${_luku1}`;
    } else if(_luku1 > _luku2) {
        return `luku ${_luku1} > ${_luku2}`;
    }else{
        return "Luvut ovat yhtäsuuria!";
    }
}