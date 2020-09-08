for (let i = 0; i < 4; i++) {
    console.log("*");
}

let nelio = '';

for (let i = 0; i < 4; i++) {
    nelio += '*';
}

console.log(nelio);

let nelio2 = '';
for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 4; i++) {
        nelio2 += '*';
    }
    nelio2 += '\n';
}

console.log(nelio2);