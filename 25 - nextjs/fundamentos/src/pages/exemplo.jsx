import Cabecalho from "../components/Cabecalho"
import Layout from "../components/Layout"
function Exemplo(){
    return(
        <Layout titulo="Usando Componentes">
            <Cabecalho titulo="Next.js & React"/>
            <Cabecalho titulo="Aprende Next na prática"/>
        </Layout>
    )
}
export default Exemplo