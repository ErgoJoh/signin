let _juoma=process.argv[2];
switch (_juoma) {
    case "appelsiinipore":
        console.log('appelsiinipore maksaa 2.0€');
        break;
    case "kolajuoma":
        console.log('kolajuoma maksaa 2.4€');
        break;
    case "kuplavesi":
        console.log('kuplavesi maksaa 1.5€');
    case "vesi":
        console.log('vesi maksaa 0.5€');
        break;
    case undefined:
        console.log('et valinnut limua.');
        break;       
    default:
        console.log(_juoma + ' ei ole valikoimassa')
        break;
}