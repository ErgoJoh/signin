
let tutkittavaLuku=process.argv[2];

let otsikko='HARJOITUS 1';
console.log(`#### ${otsikko} ####`);

if (tutkittavaLuku >=0) {
    console.log(`Antamasi luku ${tutkittavaLuku} oli tai nolla`);
} else {
    console.log(`Antamasi luku ${tutkittavaLuku} oli negatiivinen`);
}