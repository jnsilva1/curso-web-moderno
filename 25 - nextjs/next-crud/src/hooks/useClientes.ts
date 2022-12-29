import { useEffect, useState } from "react"
import ClienteRepositorio from "../../backend/ClienteRepositorio"
import ColecaoCliente from "../../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useCliente(){
    const repo: ClienteRepositorio = new ColecaoCliente()
  
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const {exibirTabela, exibirFormulario, tabelaVisivel}= useTabelaOuForm()
  
    useEffect(obterTodos,[])
  
    function obterTodos(){
      repo.obterTodos().then(clientes=>{
        setClientes(clientes)
        exibirTabela()
      })
    }
  
    function novoCliente(){
        selecionarCliente(Cliente.vazio())
    }
  
    function selecionarCliente(cliente: Cliente){
      setCliente(cliente)
      exibirFormulario()
    }
  
    function excluirCliente(cliente: Cliente){
      repo.excluir(cliente).then(obterTodos)
    }
  
    function salvarCliente(cliente: Cliente){
      repo.salvar(cliente).then(obterTodos)
    }

    return {
        tabelaVisivel,
        exibirTabela,
        cliente,
        clientes,
        salvarCliente,
        novoCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos
    }
}