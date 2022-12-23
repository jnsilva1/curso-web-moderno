import Layout from "../components/Layout"

export function getStaticProps(){
    return {
        props:{
            numero: Math.random()
        }
    }
}

function Estatico(props){
    return (
        <Layout titulo="Conteúdo Estático">
            <div>{props.numero}</div>
        </Layout>
    )
}
export default Estatico