import './conteinercards.scss'
import Card from './card.jsx'
import Rodape from './rodape.jsx'
import Rodape_bottom from './rodape-bottom.jsx'

function ConteinerCards() {
    const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    return (
        <div className="wrapermain">
            <Rodape rodape_outros={true}></Rodape>
            <main>                
                {
                    letras.map((letra, i) => (
                        <Card key={i} letra={letra}></Card>))
                }
            </main>
            <Rodape_bottom />
        </div>
    )
}

export default ConteinerCards