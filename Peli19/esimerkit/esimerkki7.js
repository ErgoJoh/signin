let luku = process.argv[2];

if (luku == 1) {
    console.log(`yksi`);
}else if(luku == 2) {
    console.log(`kaksi`);
}else if(luku == 3) {
    console.log(`kolme`);
}else{
    console.log(`Luku ei ole välillä 1-3`);
}