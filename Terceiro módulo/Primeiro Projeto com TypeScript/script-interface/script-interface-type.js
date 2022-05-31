"use strict";
;
;
const animal = {
    nome: "elefante",
    tipo: "terrestre",
    executarRugido: (amplitude) => { }, /* function vazia, posso relacionar o valor enviado com qualquer parâmetros  */
};
animal.executarRugido(2);
const felino = {
    nome: "leão",
    tipo: "terrestre",
    visaoNoturna: true,
    executarRugido: (amplitude) => (`${amplitude}dB`), /*exemplo do professor */
};
const animal2 = {
    nome: "cachorro",
    executarRugido: (x) => { },
    porte: "pequeno",
    tipo: "terrestre",
    visaoNoturna: true,
};
/* Utilizando o type agora - o tipo é utilizado para juntar diferentes interfaces ou denifir
 que uma variável pode ser uma interface ou outra interface.  */
/* type IAnimal = { sintaxe similar ao da interface, necessitando somente do sinal de igual, todo restante é similar
   nome: string;
   tipo: "terrestre" | "aquático";
   executarRugido(amplitude: number): void;
}; */ 
