// Muutetaan henkilo-olio luokaksi
class Henkilo{
    constructor(_numero, _etunimi, _sukunimi){
        this.numero = _numero;
        this.etunimi = _etunimi;
        this.sukunimi = _sukunimi;
    }
    // Metodi, joka tulostaa
    tulostaHenkilotiedot(){
        return `Henkilön ${this.numero} nimi on ${this.etunimi} ${this.sukunimi}`;
    }
};

// Luodaan luokasta Henkilo olio (Arvid Lee)
let arwid = new Henkilo(100, 'Arwid', 'Lee');
// Tulostetaan Arwid Leen tiedot
console.log(arwid.tulostaHenkilotiedot());

// Luodaan Henkilo luokasta olio (Pirkko Puro)
let pirkko = new Henkilo(101, 'Pirkko', 'Puro');
console.log(pirkko.tulostaHenkilotiedot());

// Luodaan Henkilo luokasta olio (Elmeri Rytel)
let elmeri = new Henkilo(102, 'Elmeri', 'Rytel');
console.log(elmeri.tulostaHenkilotiedot());