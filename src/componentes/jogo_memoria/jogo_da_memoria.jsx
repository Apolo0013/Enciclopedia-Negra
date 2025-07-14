/////////////////////////////////////////////////////////////////////
//jogo da memoria
//desenvolvidor por Apolonio, o mesmo criado desse site.
//GitHub: https://github.com/Apolo0013/jogo-da-memoria 
////////////////////////////////////////////////////////////////////

import { useEffect, useRef, useState } from 'react'
import './jogo_da_memoria.scss'
import Escolher from './componentes/EscolherDificuldade.jsx'
//rodape
import Rodape from '../rodape.jsx'

function App() {
    const BgRef = useRef()
    const [Aviso, SetAviso] = useState()
    //State Conteiner
    const [Conteiner, SetConteiner] = useState()
    useEffect(() => {
        SetConteiner(<Escolher SetConteiner={SetConteiner} BgRef={BgRef} SetAviso={SetAviso}/>)
        //
    }, [])
    return (
        <div className="App-jogo">
            <Rodape classop='rodape-jogo'/>
            {Conteiner}
            {Aviso}
            <div className="bg-effect" ref={BgRef}></div>
        </div>
    )
}

export default App