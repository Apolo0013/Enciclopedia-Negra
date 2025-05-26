import { useRef, useState } from 'react';
import './App.css'
//compenentes
import ConteinerArtista from './componentes/Artista/conteinerartista'
import Entrada from './componentes/entrada'


function App() {
    function HiddenConteiner() {
        SetArtista('')
        RefConteinerCards.current.classList.remove('noscroll')
    }

    function AddConteiner() {
        RefConteinerCards.current.classList.add('noscroll')
        SetArtista(<ConteinerArtista fecha={HiddenConteiner}></ConteinerArtista>)
    }
    //faça que o over flow do conteiner cards desaparecça pae
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
        </div>
    )
}

export default App;