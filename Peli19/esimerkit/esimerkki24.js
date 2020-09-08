// esim 1. esimerkki henkilö-olio.
let henkilo = {
    etunimi:'Leila',
    sukunimi:'Hökki',
};

console.log(`${henkilo.etunimi} ${henkilo.sukunimi}`);
console.log(`${henkilo['etunimi']} ${henkilo['sukunimi']}`);

// esim 2. Olio jossa funktio
let asiakas = {
    numero: 100,
    etunimi: 'Arvid',
    sukunimi: 'Lee',
    tulostaAsiakastiedot(){
        return `Asiakkaan ${this.numero} nimi on ${this.etunimi} ${this.sukunimi}`;
    }
}

console.log(asiakas.tulostaAsiakastiedot());

// esim 3. Olio jossa taulukko
let henkilo2 = {
    etunimi: 'Pirkko',
    sukunimi: 'Puro',
    puhelin: [
        {'tyyppi':'työ'},
        {'numero':'050-6745876'},
    ],
    tulostaPuhelintiedot(){
        return `${this.etunimi} ${this.sukunimi} puhelinnumero on ${this.puhelin[1].numero}`;
    }
};

console.log(henkilo2.tulostaPuhelintiedot());

// esim 4. olio ja oma metodi
function haeHenkilo(){
    let henkilo3 = {
        etunimi: 'Arwid',
        sukunimi: 'Lee',
        puhelin: [
            {'tyyppi':'koti'},
            {'numero':'050-5475869'},
        ],
        tulostaPuhelintiedot(){
            return `${this.etunimi} ${this.sukunimi} puhelinnumero kotiin on ${this.puhelin[1].numero}`;
        }
    };
    return henkilo3;
}

let arwidlee = haeHenkilo();
console.log(arwidlee.tulostaPuhelintiedot());
console.log(arwidlee.sukunimi);