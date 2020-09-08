
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

class Energia{
    constructor(_joule, _kalori){
        this.kalori = _kalori;
        this.joule = _joule;
    }
    kaloritJouleiksi(){
        return this.kalori * 4.184;
    }
    jouletKaloreiksi(){
        return this.joule * 0.2390;
    }
}

rl.question('1. Kalorit->Jouleiksi\n2. Joulet->Kaloreiksi\n',(UserInput)=>{
    if (UserInput == 1) {
        rl.setPrompt('Syötä joulet \n');
        rl.prompt();
        rl.on('line', (UserInput)=>{
            var energia = new Energia(0, UserInput);
            console.log('Jouleina: ' + energia.kaloritJouleiksi().toFixed(1));
            rl.close();
        });
    }
    if (UserInput == 2) {
        rl.setPrompt('Syötä kalorit \n');
        rl.prompt();
        rl.on('line', (UserInput)=>{
            var energia = new Energia(UserInput,0);
            console.log('Kaloreina: ' + energia.jouletKaloreiksi().toFixed(1));
            rl.close();
        });
    }
});

rl.on('close', ()=>{
    console.log('Sovelluksen suoritus päättyy!');
});