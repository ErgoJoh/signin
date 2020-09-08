/*

    Maat ja symbolit ovat:
        pata = \u2660
        risti = \u2663
        hertta = \u2665
        ruutu = \u2666
    
*/

let maa = process.argv[2];

let symboli;

if(maa=== "pata") {
    symboli="\u2660";
}else if(maa === "risti") {
    symboli="\u2663"
}else if(maa === "hertta") {
    symboli="\u2665"
}else if(maa === "ruutu") {
    symboli="\u2666"
}

console.log(symboli);

