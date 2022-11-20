import React from "react";

const BomDia = props => [
    <h1 key="nome">Bom dia {props.nome}!</h1>,
    <h3 key="idade">Que bacana você está com {props.idade} anos!</h3>
]

export default BomDia
// export default props => <React.Fragment>
//     <h1>Bom dia {props.nome}!</h1>
//     <h3>Que bacana você está com {props.idade} anos!</h3>
// </React.Fragment>


// export default props => <div>
//     <h1>Bom dia {props.nome}!</h1>
//     <h3>Que bacana você está com {props.idade} anos!</h3>
// </div>