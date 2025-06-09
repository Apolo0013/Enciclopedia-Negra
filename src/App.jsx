import { useRef, useState } from 'react';
import './App.css'
//compenentes
import ConteinerArtista from './componentes/Artista/conteinerartista'
import Entrada from './componentes/entrada'
import AppRoute from './Rotas/AppRotas'

function App() {
    function HiddenConteiner() {
        SetArtista('')
        RefConteinerCards.current.classList.remove('noscroll')
    }

    function AddConteiner(dadosinfo, dadosimg, nome) {
        RefConteinerCards.current.classList.add('noscroll')
        SetArtista(<ConteinerArtista fecha={HiddenConteiner} dadosinfo={dadosinfo} dadosimg={dadosimg} nome={nome} ></ConteinerArtista>)
    }

    //ref
    const RefConteinerCards = useRef()
    //state
    const [ConteinerCardsState, SetConteiner] = useState()
    const [EntradaState, SetEntrada] = useState(<Entrada Set={SetConteiner} add={AddConteiner}></Entrada>)
    const [Artista, SetArtista] = useState()
    return (
        <div className="main" ref={RefConteinerCards}>
            {EntradaState}
            {ConteinerCardsState}
            {Artista}
            <AppRoute></AppRoute>
        </div>
    )
}

export default App;