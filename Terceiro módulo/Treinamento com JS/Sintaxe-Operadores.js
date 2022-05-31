function frase(a, b) {
    if (!a || !b) {
        return "Digite por favor dois números"
    }
    const primeiraFrase = igual(a, b);
    const segundaFrase = diferenca(a, b);
    return `${primeiraFrase}, ${segundaFrase}.`;
}
function igual(a, b) {
    if (a === b) {
        return `Os números ${a} e ${b} são iguais`;
    }
    return `Os números ${a} e ${b} não são iguais`;
}
function diferenca(a, b) {
    var soma = a + b;
    var result10 = "menor";
    var result20 = "menor";
    if (soma > 10) {
        result10 = "maior";
    }
    if (soma = 10) {
        result10 = "igual";
    }
    if (soma > 20) {
        result20 = "maior";
    }
    if (soma = 20) {
        result20 = "igual";
    }
    return `Sua soma é ${soma}, que é ${result10} que 10 e ${result20} que 20`;
}
console.log(frase(20, 10))
   

