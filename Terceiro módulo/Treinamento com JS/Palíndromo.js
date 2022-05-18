/* Primeira forma de verificação // depois vendo a vídeo aula percebi que não precisava do if
function verificapalindromo(string) {
    if (!string) {
        return "Por favor, digite uma palavra";
    }
    function palindromo(string) {
        if (string.split("").reverse().join("") === string){
            return "true"; 
        }
        else{
            return "false";
        }
        
    }
    return palindromo(string)
}
console.log(verificapalindromo("asa")); */

/* Segunda forma de verificação */
function verificatwo(string) {
    if (!string) return "Por favor, digite uma palavra";
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== string[string.length -1 - i]){
            return false;
        }
        return true;
    }
}
console.log(verificatwo("fabricio"))