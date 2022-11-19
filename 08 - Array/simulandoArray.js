const log = console.log
const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function(){
        return Object.values(this)
    },
    enumerable: false
})
log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
log(quaseArray.toString(), meuArray)