const log = console.log;
const pai = { nome: 'Pedro', corCabelo: 'preto' };

const filha1 = Object.create(pai);
filha1.nome = 'Ana';
log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
});
log(filha2.nome);
filha2.nome = 'Carla';
log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

log(Object.keys(filha1));
log(Object.keys(filha2));

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
        log(key) :
        log(`Por herança: ${key}`);
}