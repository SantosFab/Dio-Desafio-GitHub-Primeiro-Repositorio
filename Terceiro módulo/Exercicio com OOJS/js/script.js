class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {/* Construindo todos esses parâmetros que serão usados */
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    get saldo() { /* Não entendi a função do get e set ainda, modificadores? */
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) { /* Criação de método - para alterar os parâmetros criados */
        if (valor > this._saldo) {
            return "Saldo insuficiente";
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depoistar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
};

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito) { /* recebendo todos esses parâmetros da class pai */
        super(agencia, numero, saldo); /* Encaminhando possíveis alterações desses parâmetros para a clas pai */
        this.tipo = "corrente"; /* Nessa class, não há outro tipo de conta, logo já tá setado seu tipo */
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() { /* ainda não entendi nada sobre o get e set */
        return this.cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }

};

class contaPoupanca extends ContaBancaria { /* a class filha já tem acesso ao métodos do pai */
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
        this.tipo = "poupança";
        this._saldo = saldo;
    }
};

class contaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, saldo, numero);
        this.tipo = "Universitária";       
    }
    sacar(valor) {
        if(valor > 500){
            return "Valor superior ao limite diário!"
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}