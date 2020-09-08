
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

class Tahti{
    constructor(_tahtienLukumaara){
        this.tahtienLukumaara = _tahtienLukumaara;
    }
    tulostaTahdet(){
        let nelio = '';
        for (let i = 0; i < this.tahtienLukumaara; i++) {
            nelio += '*';
        }
        console.log(nelio);
    }
}

rl.question('Syötä tahtien lukumäärä\n',(UserInput)=>{
    var tahti = new Tahti(UserInput);
    tahti.tulostaTahdet()
    rl.close();
});

rl.on('close', ()=>{
    console.log('Sovelluksen suoritus päättyy!');
});