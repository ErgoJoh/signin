
class Auto{
    constructor(_bensaTilavuus, _bensanMaara, _nopeus, _merkki, _malli){
        this.bensaTankinTilavuus = _bensaTilavuus;
        this.bensaMaaraTankissa = _bensanMaara;
        this.nopeus = _nopeus;
        this.merkki = _merkki;
        this.malli = _malli;
    }
    lisaaBensaa(_bensanMaara){
        this.bensaMaaraTankissa += _bensanMaara;
    }
    naytaBensanMaara(){
        console.log('Bensan määrä tankissa ' + this.bensaMaaraTankissa);
    }
    kaynnista(){
        console.log('Auto käynnissä');
    }
    aja(){
        console.log('Auto ajossa');
    }
};

let auto = new Auto(60, 100, 150, 'BMW', 316);
auto.naytaBensanMaara();
auto.lisaaBensaa(10);
auto.naytaBensanMaara();
auto.kaynnista();
auto.aja();