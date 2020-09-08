
let _jaettava=process.argv[2];
let _jakaja=process.argv[3];

function JaettavaJaJakaja(_jaettava, _jakaja) {
    if (_jaettava % _jakaja == 0) {
        console.log('Luku ' + _jaettava + ' on jaollinen luvulla ' + _jakaja);
    } else {
        console.log('Luku ' + _jaettava + ' ei ole jaollinen luvulla ' + _jakaja);
    }
};

console.log(JaettavaJaJakaja(_jaettava, _jakaja));


