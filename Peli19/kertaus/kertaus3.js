function laskeKeskiarvo(_luvut){
    let summa = 0;
    let luvut = _luvut;
    for (let i = 0; i < luvut.lenght; i++){
        summa += luvut[i];
    }
    return summa / luvut.lenght;
}

numerot = [1,2,3,4];

let keskiarvo = laskeKeskiarvo(numerot);
console.log(keskiarvo);

