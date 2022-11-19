const Pessoa = (function(){
    function Pessoa(nome){
        this.nome = nome;
    }

    Pessoa.prototype.falar = function (){
        console.log(`Meu nome é ${this.nome}`);
    }

    return Pessoa;
})();

const p1 = new Pessoa('João');
p1.falar();