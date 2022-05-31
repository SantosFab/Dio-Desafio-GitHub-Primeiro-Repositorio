interface IAnimal { /* Similar a orientação de objetos? Essa interface não é enviada para o doc script */
    nome: string; /* É usando para estabelecer vínculo de contrato */
    tipo: "terrestre" | "aquático";
    executarRugido(amplitude: number): void; /* O que é um void? Valor é indefinido?*/
};

interface IFelino extends IAnimal {
    visaoNoturna: boolean,
};

interface ICanino extends IAnimal {
    porte: "pequeno" | "Médio" | "Grande";
}

const animal: IAnimal = {
    nome: "elefante",
    tipo: "terrestre",
    executarRugido: (amplitude) => { }, /* function vazia, posso relacionar o valor enviado com qualquer parâmetros  */
};
animal.executarRugido(2)

const felino: IFelino = {
    nome: "leão",
    tipo: "terrestre",
    visaoNoturna: true,
    executarRugido: (amplitude) => (`${amplitude}dB`), /*exemplo do professor */
};

type IDomestico = IFelino & ICanino; /* Juntei duas extensões */

const animal2: IDomestico = {
nome: "cachorro",
executarRugido: (x) => { },
porte: "pequeno",
tipo: "terrestre",
visaoNoturna: true,
}

/* Utilizando o type agora - o tipo é utilizado para juntar diferentes interfaces ou denifir
 que uma variável pode ser uma interface ou outra interface.  */

/* type IAnimal = { sintaxe similar ao da interface, necessitando somente do sinal de igual, todo restante é similar
   nome: string;  
   tipo: "terrestre" | "aquático";
   executarRugido(amplitude: number): void; 
}; */