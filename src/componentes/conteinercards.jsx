import './conteinercards.css'
import Card from './card.jsx'
import HomeExit from './exithome.jsx'

function ConteinerCards() {
    const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    return (
        <main>
            <HomeExit/>
            {
                letras.map((letra, i) => (
                    <Card key={i} letra={letra}></Card>))
            }
        </main>
    )
}

export default ConteinerCards