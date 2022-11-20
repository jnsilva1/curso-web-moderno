import React from  'react'
import ReadDOM from 'react-dom'

import BomDia from './componentes/BomDia'

// const elemento = <h1>React 2</h1>
// ReadDOM.render(elemento, document.getElementById('root'))
ReadDOM.render(<BomDia nome="José Nilo" idade={25}/>, document.getElementById('root'))

