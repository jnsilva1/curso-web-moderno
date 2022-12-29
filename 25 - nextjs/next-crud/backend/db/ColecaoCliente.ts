import firebase from "../config";
import Cliente from "../../src/core/Cliente";
import ClienteRepositorio from "../ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {

    #conversor ={
        toFirestore(cliente: Cliente){
            return {
                nome: cliente.nome,
                idade: cliente.idade
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente {
            const dados = snapshot.data(options);
            return new Cliente(dados.nome, dados.idade, snapshot?.id);
        }

    }

    async excluir(cliente: Cliente): Promise<void> {
        return this.#colecao().doc(cliente.id??undefined).delete()
    }

    async obterTodos(): Promise<Cliente[]> {
        return this.#colecao().get().then(query=> query.docs.map(doc=> doc.data()))
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        if(cliente?.id){
            return this.#colecao().doc(cliente.id).set(cliente).then(()=> cliente)
        }else{
            return this.#colecao().add(cliente).then(docRef=> docRef.get()).then(doc=> doc.data() ?? Cliente.vazio())
        }
    }

    #colecao(){
        return firebase
            .firestore()
            .collection('clientes')
            .withConverter(this.#conversor)
    }
}