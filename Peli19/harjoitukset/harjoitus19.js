class Matikka{
    constructor(_kanta, _korkeus, _r){
        this.kanta = _kanta;
        this.korkeus = _korkeus;
        this.sade = _r;
    }
    kolmionAla(){
        return this.kanta * this.korkeus / 2;
    }

    ympyranAla(){
        return 3.14 * this.sade * this.sade;
    }
}

var matikka = new Matikka(5.1, 3.9, 8)

var kolmionAla = matikka.kolmionAla();
console.log(kolmionAla);
console.log(kolmionAla.toFixed(1));

var ympyranAla = matikka.ympyranAla();
console.log(ympyranAla.toFixed(1));