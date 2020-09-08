// Kertaus 1.
function tarkistaParillisuus(_luku) {
   if (_luku%2 == 0) {
       return true;
   } else {
       return false;
   }
}
let pariVaiEi = tarkistaParillisuus(_luku=process.argv[2]);
console.log(pariVaiEi);