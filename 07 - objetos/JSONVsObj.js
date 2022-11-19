const log =  console.log
const obj = { a: 1, b: 2, c: 3, soma(){ return a + b + c } }
log(JSON.stringify(obj))

//log(JSON.parse("{ a: 1, b: 2, c: 3}"))
//log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}"))
log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))
log(JSON.parse('{ "a": 1.7, "b":"string", "c": true, "d": {}, "e": {} }'))