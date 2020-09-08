// Kertaus 2.

function tulostaLampotila(_lampoaste){

if (_lampoaste < -25) {
    return 'Kovapakkanen';

} else if(_lampoaste < -10) {
    return 'Pakkanen';

} else if (_lampoaste < 0) {
    return 'Pikkupakkanen';

} else if (_lampoaste < 25) {
    return 'Lämmintä'; 

}else{
    return 'Hellettä';
}
}
let lampotila = tulostaLampotila(_lampoaste=process.argv[2]);
console.log(lampotila);