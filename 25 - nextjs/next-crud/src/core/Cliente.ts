export default class Cliente{
    #id: string | null
    #nome: string
    #idade: number

    constructor(nome: string, idade: number, id: string|null = null){
        this.#nome = nome
        this.#idade = idade
        this.#id = id
    }

    get id(){
        return this.#id
    }

    get nome(){
        return this.#nome
    }

    get idade(){
        return this.#idade
    }

    static vazio = () => new Cliente('',0);
}