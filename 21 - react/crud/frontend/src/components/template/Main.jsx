import './Main.css'
import React, {Fragment} from 'react'
import Header from './Header'

const Main = props =>
    <Fragment>
        <Header {...props}/>
        <main className="content">
            Conteúdo
        </main>
    </Fragment>    

export default Main