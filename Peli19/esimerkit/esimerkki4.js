if (process.argv.length < 3) {
    console.log("Et antanut maata");
}
else {
    let maa=process.argv[2];
    let symboli;
    if(maa.toLowerCase()==="pata") {
        symboli="\u2660";
    }
    else if(maa.toLowerCase()==="risti") {
        symboli="\u2663";
    }
    else if(maa.toLowerCase()==="hertta") {
        symboli="\u2665";
    }
    else if(maa.toLowerCase()==="ruutu") {
        symboli="\u2666";
    }
    else {
        symboli="tuntematon maa";
    }
    console.log(symboli);
}