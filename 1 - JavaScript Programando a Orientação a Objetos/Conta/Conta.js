export class Conta{

    constructor(saldoInicial, cliente, agencia){
        
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta Diretamente");
        }
        
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    //Metodo Abstrado
    sacar(valor) {
        throw new Error("O metodo Sacar da conta é abstrato");
    };

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;

        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor, deposito) {
        if (valor <= 0) {
            console.log("Valor Invalido!");
            return;
        }
        this._saldo += valor;
        console.log(this.cliente.nome + (deposito == true?" depositou R$ ":" recebeu tranferencia de R$") + valor);
        console.log("Saldo total: "+ this._saldo);
        return valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado, false);
        console.log(this.cliente.nome + " trasferil para "+ conta.cliente.nome+" R$ " + valor);
        console.log("Saldo restante: "+ this._saldo);
    }
}