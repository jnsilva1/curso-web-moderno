import { useState } from "react"

export default function useTabelaOuForm(){
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    return {
        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        exibirTabela:()=> setVisivel('tabela'),
        exibirFormulario:()=> setVisivel('form')
    }
}