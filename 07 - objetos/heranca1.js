const _log = console.log;
const ferrari={
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

_log(ferrari.__proto__)
_log(ferrari.__proto__ === Object.prototype)
_log(volvo.__proto__ === Object.prototype)
_log(Object.prototype.__proto__ === null)


function MeuObjeto(){}
_log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)