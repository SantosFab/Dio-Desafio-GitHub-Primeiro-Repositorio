function recepcaoItem(number1, number2){
    const primeiraFrase = criaPrimeiraFrase(number1, number2)
    const segundaFrase = criaSegundaFrase(number1, number2)
    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(number1, number2) {
    let iguais = "";
    if (number1 !== number2) {
        iguais = "não";        
    }    
    return `Os números são ${number1} e ${number2} ${iguais} são iguais.`
}

function criaSegundaFrase(number1, number2) {
    const soma = number1 + number2;
    let resultado10 = "menor";
    let resultado20 = "menor";
    const conta10 = soma > 10;
    if (conta10) {
        resultado10 = "maior";
    }
    const conta20 = soma > 20;
    if (conta20) {
        resultado20 = "maior";
    }
     return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`   
}
console.log(recepcaoItem(1, 11))