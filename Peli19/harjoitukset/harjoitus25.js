let _nimi=process.argv[2];
let empty=console.log("");
function Hampurilainen(_nimi) {
    if (_nimi == 'tavallinen') {
        console.log('tavallinen maksaa 1€');
    }else if (_nimi == 'kerros') {
        console.log('kerros maksaa 2€')
    }else if (_nimi == 'kasvis') {
        console.log('kasvis maksaa 1.5€')
    }else if (_nimi == empty) {
        console.log('et valinnut hampurilaista')
    }else {
        console.log(_nimi + ' ei ole valikoimassa')
    }
}

console.log(Hampurilainen(_nimi));