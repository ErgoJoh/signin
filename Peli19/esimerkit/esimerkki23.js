// Harjoitus 1.
function tarkistaMerkkijono(_merkkijono){
    if (_merkkijono.startsWith('kuva')) {
        return true;
    } else {
        return false;
    }
}

let tarkistus = tarkistaMerkkijono('kuvagalleria.png');
console.log(tarkistus);

// Harjoitus 2.
function tarkistaMerkkijono2(_tiedostonNimi){
    if (_tiedostonNimi.endsWith('.png')) {
        return true;
    } else {
        return false;
    }
}

let tarkistus2 = tarkistaMerkkijono2('kuvagalleria.png')
console.log(tarkistus2);

// Harjoitus 3.
function selvitaSijainti(_merkkijono){
    return _merkkijono.indexOf('on');
}

let indeksi = selvitaSijainti('Ohjelmointi on kivaa puuhaa!');
console.log(indeksi);

// Harjoitus 4.
function erotaSana(_teksti){
    let alku = _teksti.indexOf('cloud.');
    let loppu = _teksti.lastIndexOf('.fi');
    return _teksti.substring(alku + 6, loppu);
}

let sana = erotaSana('cloud.bc.fi');
console.log(sana);

// Harjoitus 5.
function omaLinkki(_linkkisana, _linkki){
    return _linkkisana.link(_linkki);
}

let osoite = omaLinkki('siirry cloudiin', 'http://cloud.businesscollege.fi');
console.log(osoite);

// Harjoitus 6.
function takaperin(_teksti){
    return _teksti.split('').reverse().join('');
}

let sanatakaperin = takaperin('Hölmöläisten hommaa');
console.log(sanatakaperin);

// Harjoitus 7.
function omaEtsiJaKorvaa(_teksti, _korvattava, _korvaava){
    return _teksti.replace(_korvattava, _korvaava);
}

let uusiTeksti = omaEtsiJaKorvaa('Ohjelmointi on tylsää!', 'tylsää', 'kivaa');
console.log(`Ohjelmointi on tylsää --> ${uusiTeksti}`);