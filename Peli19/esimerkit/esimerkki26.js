// Muuta asiakas-olio Asiakas luokaksi
class Asiakas{
    constructor(_etunimi, _sukunimi, _puhelin){
        this.etunimi = _etunimi;
        this.sukunimi = _sukunimi;
        this.puhelin = _puhelin;
    }
    // Metodi joka tulostaa asiakkaan tiedot
    tulostaAsiakastiedot(){
        return `${this.etunimi} ${this.sukunimi} puhelinnumero on ${this.puhelin[1].numero}`;
    }
    tulostaPuhelinTyyppi(){
        return `${this.etunimi} ${this.sukunimi}, puhelimen tyyppi on ${this.puhelin[0].tyyppi}`;
    }
};

// Olion (Pirkko Puro) luominen luokasta Asiakas
let pirkko = new Asiakas('Pirkko', 'Puro', [{'tyyppi':'työ'},{'numero':'050-4569876'}]);
console.log(pirkko.tulostaAsiakastiedot());
console.log(pirkko.tulostaPuhelinTyyppi());

// Olion (Elmeri Rytel) luominen luokasta Asiakas
let elmeri = new Asiakas('Elmeri', 'Rytel', [{'tyyppi':'koti'},{'numero':'040-5694857'}]);
console.log(elmeri.tulostaPuhelinTyyppi());