// 1. Koodaa metodi joka tulostaa henkilön koko nimen.
function tulostaNimi(_etunimi, _sukunimi){
    console.log(`${_etunimi} ${_sukunimi}`);
}

tulostaNimi('Ergo', 'Johanson');

// 2. Koodaa metodi summa (a, b), jossa a ja b ovat kokonaislukuja.
function summa(a,b){
    console.log(a+b);
}

summa(2,3);

// 3. Koodaa metodi joka saa parametrinä auton rekisterinumero ja 
// palauttaa sen isoina kirjaimina kutsujalle.
function muutaRekisterinumero(_rekisterinumero){
    return _rekisterinumero.toUpperCase();
}

let uusiRekisterinumero = muutaRekisterinumero('abc-123');
console.log(uusiRekisterinumero);

// 4. Koodaa metodi joka vertailee kahta parametrinä annettua arvoa
// luku1 ja luku2 ja palauttaa joko arvon -1,0 tai 1.
function vertaile(_luku1, _luku2){
  if (_luku1 < _luku2) {
      return -1;
  } else if (_luku1 > _luku2) {
      return 1;
  }else{
      return 0;
  }
}

let tulos = vertaile(3, 2);
console.log(tulos);

// 5. Koodaa metodi joka palauttaa parametrinä saadun tekstin merkkien lukumäärän.
function merkkienLukumaara(_teksti){
    return _teksti.length;
}

let lukumaara = merkkienLukumaara('Saippuakauppias');
console.log(lukumaara);

// 6. Koodaa metodi, joka tulostaa rivin merkkejä.
function tulostaMerkkirivi(_lukumaara, _merkki){
    let vaakarivi = '';
    for (let i = 0; i < _lukumaara; i++) {
        vaakarivi += _merkki;
    }
    console.log(vaakarivi);
}
tulostaMerkkirivi(6, 'e');

// 7. Koodaa metodi, joka laskee parametrinä saadusta tekstista Saippuakauppias a-kirjainten
//lukumäärän ja palauttaa lukumäärän kutsujalle.
function kirjaintenLukumaara(_teksti) {
    let lukumaara = 0;
    for (let i = 0; i < _teksti.length; i++) {
       if (_teksti[i] == 'a') {
           lukumaara++;
       }
    }
    return lukumaara;
}

let a_kirjaimia = kirjaintenLukumaara('Saippuakauppias');
console.log(a_kirjaimia);

// 8. Koodaa metodi alennaHintaa, joka saa parametrinä hinnan ja laskee sille 10% alennuksen ja 
// palauttaa alennetun hinnan kutsujalle.
function alennaHintaa(_vanhahinta){
    return 0.9 * _vanhahinta;
}

let uusihinta = alennaHintaa(100);
console.log(`10% 100 on ${uusihinta}`);

// 9. Koodaa metodi TakeDamage, joka vähentää vihollisen terveyttä yhdellä.
let health = 1;
function TakeDamage(){
    health--;
    if (health <= 0) {
        return 'Vihollinen kuoli';
    }
}

let vihollisenTila = TakeDamage();
console.log(vihollisenTila);