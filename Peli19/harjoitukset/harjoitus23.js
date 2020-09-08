function Celsius(Farenheit) {
    var faste = Farenheit;
    var celsius = (faste -32) * 5 / 9;
    var viesti = faste+'\xB0F on ' + celsius + '\xB0C.';
        console.log(viesti);
}
Celsius(32);

