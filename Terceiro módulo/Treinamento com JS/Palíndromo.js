/* Primeira forma de verificação  */// depois vendo a vídeo aula percebi que não precisava do if
/* function verificapalindromo(string) {
    if (!string) {
        return "Por favor, digite uma palavra";
    }
    function palindromo(string) {
        if (string.split("").reverse().join("") === string){
            // "o", "v", "o" //"o", "v", "o" ovo
            return "true"; 
        }
        else{
            return "false";
        }
        
    }
    return palindromo(string)
}
var olmir = 'carro'
console.log(verificapalindromo(olmir)); */



/* Segunda forma de verificação */
function verificaTwo(string) {
    if (typeof string !== "string") return "Por favor, digite uma palavra";
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length -1 - i]){
            return false;
        }       
    }
    return true;
}
console.log(verificaTwo(2))



