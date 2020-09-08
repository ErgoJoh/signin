class Matka{
    constructor(_tunnus, _nimi, _kesto, _mjtunnus, _kotunnus, _hinta){
        this.tunnus = _tunnus;
        this.nimi = _nimi;
        this.kesto = _kesto;
        this.mjtunnus = _mjtunnus;
        this.kotunnus = _kotunnus;
        this.hinta = _hinta;
    }
    tulostaMatkatiedot(){
        return `Matkan nimi on ${this.nimi} ja kesto ${this.kesto} tuntia`;
    }
};

let matka1 = new Matka('123', 'Liikematka', '7', 'KOT', 'PAR', '210');
console.log(matka1.tulostaMatkatiedot());

class Matkustaja{
    constructor(_tunnus2, _nimi2, _katuos2, _postinro2, _paikkakunta2, _puhelin2){
        this.tunnus2 = _tunnus2;
        this.nimi2 = _nimi2;
        this.katuos2 = _katuos2;
        this.postinro2 = _postinro2;
        this.paikkakunta2 = _paikkakunta2;
        this.puhelin2 = _puhelin2;
    }
    tulostaMatkustajatiedot(){
        return `Matkustajan nimi on ${this.nimi2}, ja paikkakunta on ${this.paikkakunta2}`;
    }
};

let matkustaja1 = new Matkustaja('33213', 'Jari Laine', 'Tellervonkatu 2', '55100', 'Lappeenranta', '050-6946612');
console.log(matkustaja1.tulostaMatkustajatiedot());

class Lippu{
    constructor(_numero3, _pvm3, _astunnus3, _mattunnus3, _tyyppi3){
        this.numero3 = _numero3;
        this.pvm3 = _pvm3;
        this.astunnus3 = _astunnus3;
        this.mattunnus3 = _mattunnus3;
        this.tyyppi3 = _tyyppi3;
    }
    tulostaLipputiedot(){
        return `Lipun numero ${this.numero3}, ja päivämäärä ${this.pvm3} ja lipun tyyppi on ${this.tyyppi3}, lipun asiakkaan tunnus on ${this.astunnus3} `;
    }
};

let lippu1 = new Lippu('90112', '21.05.20', '5044', '123', 'Lento');
console.log(lippu1.tulostaLipputiedot());