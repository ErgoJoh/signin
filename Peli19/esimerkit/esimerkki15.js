
let merkki = process.argv[2];
let rivit = process.argv[3];
let sarakkeet = process.argv[4];
let kuvio = '';

for (let j = 0; j < rivit; j++) {
    for (let i = 0; i < sarakkeet; i++) {
        kuvio += merkki;
    }
    kuvio += '\n';
}

console.log(kuvio);