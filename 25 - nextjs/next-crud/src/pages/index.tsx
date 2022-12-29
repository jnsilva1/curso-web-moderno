import { useEffect, useState } from "react"
import ClienteRepositorio from "../../backend/ClienteRepositorio"
import ColecaoCliente from "../../backend/db/ColecaoCliente"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import useCliente from "../hooks/useClientes"
import useTabelaOuForm from "../hooks/useTabelaOuForm"

export default function Home() {
  
  const {
    cliente, 
    clientes, 
    novoCliente, 
    selecionarCliente, 
    excluirCliente, 
    salvarCliente,
    exibirTabela,
    tabelaVisivel
  } = useCliente()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {
          tabelaVisivel ?
          (
            <>
              <div className="flex justify-end">
                <Botao className="mb-4" cor="green" noClique={novoCliente}>Novo Cliente</Botao>
              </div>
              <Tabela 
                clientes={clientes} 
                clienteSelecionado={selecionarCliente} 
                clienteExcluido={excluirCliente} 
                />
            </>
          ) :
          (<Formulario cliente={cliente} cancelado={exibirTabela} clienteMudou={salvarCliente}/>)
        }
      </Layout>
    </div>
  )
}
