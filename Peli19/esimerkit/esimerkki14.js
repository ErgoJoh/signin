
let merkki=process.argv[2];

let nelio2 = '';
for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 4; i++) {
        nelio2 += merkki;
    }
    nelio2 += '\n';
}

console.log(nelio2);