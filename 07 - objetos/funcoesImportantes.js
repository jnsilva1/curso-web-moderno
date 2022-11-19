const _log = console.log;
const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

_log(Object.keys(pessoa));
_log(Object.values(pessoa));
_log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor])=>{
    _log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
});

pessoa.dataNascimento = '01/01/2017';
_log(pessoa.dataNascimento);
_log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)
const dest = {a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2);

Object.freeze(obj);
obj.c = 1234;
_log(obj);