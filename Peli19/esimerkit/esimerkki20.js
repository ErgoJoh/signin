
let taulukko2D = [
    [1, '\u2660', 3],
    [4, 5, '\u2660']
];

let tulos = '';

for (let rivi of taulukko2D) {
    for (const alkio of rivi) {
        tulos += alkio;
    }
    tulos += '\n';
}
console.log(tulos);