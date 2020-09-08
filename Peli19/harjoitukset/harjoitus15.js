// Tehtävä 1.
function poistaVälilyönti(_teksti){
    String = '   ammukset    ';
   return String.trim();
}
let uusiTeksti = poistaVälilyönti();
console.log(uusiTeksti);

// Tehtävä 2.
function tarkistaMerkkijono(_tiedostonNimi){
    if (_tiedostonNimi.endsWith('.jpg')) {
        return true;
    }if (_tiedostonNimi.endsWith('.png')) {
            return true;
    } else {
        return false;
    }
}

let tarkistus = tarkistaMerkkijono('kuvagalleria.png')
console.log(tarkistus);

// Tehtävä 3.
function selvitaSijainti(_merkkijono){
    if(_merkkijono.indexOf('on')){

     return _merkkijono.indexOf('on');

    }else{
        return false;
    }
}

let indeksi = selvitaSijainti('Ohjelmointi on kivaa puuhaa!');
console.log(indeksi);

// Tehtävä 4.




