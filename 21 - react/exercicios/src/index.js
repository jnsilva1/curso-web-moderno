import React from  'react'
import ReadDOM from 'react-dom'

// import BomDia from './componentes/BomDia'

// import Multi, { BoaNoite} from './componentes/Multiplos'

// const elemento = <h1>React 2</h1>
// ReadDOM.render(elemento, document.getElementById('root'))
//ReadDOM.render(<BomDia nome="José Nilo" idade={25}/>, document.getElementById('root'))

// ReadDOM.render(
// <div>
//     <Multi.BoaTarde nome="Ana"/>
//     <BoaNoite nome="Bia"/>
// </div>,
//  document.getElementById('root'))

import Saudacao from './componentes/Saudacao'
ReadDOM.render(
    <Saudacao tipo="Bom dia" nome="João"/>,
     document.getElementById('root'))