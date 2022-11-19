const _log = console.log;
const sequencia = {
    _valor: 1, //convenção
    get valor(){
        return this._valor++;
    },
    set valor(valor){
        if(valor > this._valor)
            this._valor = valor;
    }
}

_log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
_log(sequencia.valor, sequencia.valor);
sequencia.valor = 900;
_log(sequencia.valor, sequencia.valor);
