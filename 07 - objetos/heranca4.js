const log = console.log
function MeuObjeto(){

}
log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
log(obj1.__proto__ === obj1.__proto__)
log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo';
MeuObjeto.prototype.falar = function(){
    log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//Resumindo a loucura....
log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
log(MeuObjeto.__proto__ === Function.prototype)
log(Function.prototype.__proto__ === Object.prototype)
log(Object.prototype.__proto__ === null)

/***
 * 
 * 
 *  _________________________
 * |                         |
 * |        MeuObjeto        |
 * |_________________________|                                                                  
 * | prototype      |    #---|-----------¬                                                                       
 * |________________|________|            |              _________________________                                                
 * |{{Prototype}}   |    #---|------------|-----------> |                         |
 * |________________|________|            |             |    Function.prototype   |
 *                                        |             |_________________________|                                            
 *                                        |             |{{Prototype}}   |    #---|--------------¬
 *                                        |             |________________|________|               |                                       
 *  _________________________             |                                                       |
 * |                         |            |                                                       |
 * |  MeuObjeto.prototype    | <----------┘                                                       |
 * |_________________________|                                                                    |
 * | atrribute      |        |                                                                    |
 * |________________|________|                           _________________________                |
 * |{{Prototype}}   |    #---|------------------------> |                         |               |
 * |________________|________|                          |     Object.prototype    | <-------------┘
 *                                                      |_________________________|
 *                                                      |{{Prototype}}   |   null |
 *                                                      |________________|________|
 * 
 */