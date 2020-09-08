// 1. Matka
let matka = {
    tunnus:'123',
    nimi:'Liikematka',
    kesto:'7',
    mjtunnus:'KOT',
    kotunnus:'PAR',
    hinta:'210',
};

// 2. Matkustaja
let matkustaja = {
    tunnus:'33213',
    nimi:'Laine Jari',
    katuos:'Tellervonkatu 2',
    postinro:'55100',
    paikkakunta:'Lappeenranta',
    puhelin:'050-6946612',
};
// 4. Matkustaja tulostus
console.log(`${matkustaja.nimi} ${matkustaja.paikkakunta}`);


// 3. Lippu
let lippu = {
    numero:'90112',
    pvm:'21.05.20',
    astunnus:'5044',
    mattunnus:'123',
    tyyppi:'Lento',
};
// 5. Lippu tulostus
console.log(`${lippu.numero} ${lippu.pvm} ${lippu.tyyppi} ${lippu.astunnus}`);

// 6. Matka jossa funktio ja metodi
let matka2 = {
    tunnus:'123',
    nimi:'Liikematka',
    kesto:'7',
    mjtunnus:'KOT',
    kotunnus:'PAR',
    hinta:'210',
    tulostaMatkatiedot(){
        return `Matkan nimi on ${this.nimi} ja matkan kesto on ${this.kesto}`;
    }
}
console.log(matka2.tulostaMatkatiedot());