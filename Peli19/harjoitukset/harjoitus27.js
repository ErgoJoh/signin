
class Taulukko{
    constructor(_numerot){
        this.numerot = _numerot;
    }
    tulostaLuvut(_numerot){
        return this.numerot
    }
    tulostaParittomat(_numerot){
        for (let x = 0; x < this.numerot.length; x++) {
            if (this.numerot[x] % 2 !== 0) {
                console.log(this.numerot[x]);
            }
        } 
    }
    lisaaLuku(_luku){
       this.numerot.push(_luku)
    }
};

let numerot = new Taulukko([1,10,2,7,20,3,10,90,37]);
console.log(numerot.lisaaLuku(50));
console.log(numerot.tulostaLuvut());
console.log(numerot.tulostaParittomat());
