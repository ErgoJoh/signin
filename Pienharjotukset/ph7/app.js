"use strict";

const btnTulosta = document.querySelector("#btnTulosta");

btnTulosta.onclick = function (){
    const etunimi = document.querySelector("#etunimi").value;
    const sukunimi = document.querySelector("#sukunimi").value;
    const osoite = document.querySelector("#osoite").value;
    const puhelinkoti = document.querySelector("#puhelinkoti").value;
    const puhelintyo = document.querySelector("#puhelintyo").value;

    const henkilo = Henkilo(etunimi, sukunimi, osoite, puhelinkoti, puhelintyo);

    const tulos = document.querySelector("#tiedot");

   // tulos.innerHTML = henkilo.tulostaKotipuhelin();
    tulos.innerHTML = henkilo.tulostaTyopuhelin();

    return false;
}

function Henkilo(_etunimi, _sukunimi, _osoite,  _puhelinkoti,  _puhelintyo) {
    let henkilo = {
        etunimi: _etunimi,
        sukunimi: _sukunimi,
        osoite: _osoite,
        puhelin: [
            { tyyppi: "koti"},
            { numero: _puhelinkoti},
            { tyyppi: "työ"},
            { numero: _puhelintyo}
        ],

        tulostaKotipuhelin(){
            return`${this.etunimi} ${this.sukunimi} puhelinnumero kotiin on ${this.puhelin[1].numero}`;
        },

        tulostaTyopuhelin(){
            return`${this.etunimi}${this.sukunimi.charAt(0)}, työ: ${this.puhelin[3].numero} asuu osoitteessa ${this.osoite}`;
        }
        
    }

    return henkilo;
}