
    function LaukkuVaiKassi(_tuote) {
        
        if (_tuote == `jäätelö`) {
            console.log(`${_tuote} pitää kuljettaa kylmälaukussa`);
        }else if (_tuote == `maito`) {
            console.log(`${_tuote} pitää kuljettaa kylmälaukussa`);
        }else if (_tuote == `kerma`) {
            console.log(`${_tuote} pitää kuljettaa kylmälaukussa`);
        }else if (_tuote == `jauheliha`) {
            console.log(`${_tuote} pitää kuljettaa kylmälaukussa`);
        }else if (_tuote == `ruisleipä`) {
            console.log(`${_tuote} voidaan kuljettaa kassissa`);
        }else if (_tuote == `karkkipussi`) {
            console.log(`${_tuote} voidaan kuljettaa kassissa`);
        }else if (_tuote == `omena`) {
            console.log(`${_tuote} voidaan kuljettaa kassissa`);
        }else if (_tuote == `peruna`) {
            console.log(`${_tuote} voidaan kuljettaa kassissa`);
        }
    }

console.log(LaukkuVaiKassi(_tuote=process.argv[2]));

