import { useState } from 'react';
import Layout from '../components/Layout'
function Estado(props){
    let [numero, setNumero] = useState(0)//React Hooks
    function incrimentar(){
        setNumero(++numero)
    }
    return (
        <Layout titulo="Componente com Estado">
            <span>{numero}</span>
            <button onClick={incrimentar}>Incrementar</button>
        </Layout>
    )
}
export default Estado