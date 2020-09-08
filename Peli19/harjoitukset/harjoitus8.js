let kuvio = '';

for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 5; i++) {
        if (i == 2) {
            kuvio += '?';
        } else {
            kuvio += '#';
        }
    }
    kuvio += '\n';
}
console.log(kuvio);