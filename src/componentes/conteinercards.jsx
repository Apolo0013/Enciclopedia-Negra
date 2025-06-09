import './conteinercards.css'
import Card from './card.jsx'
import ImgVoltar from '../img/voltar.webp'

function ConteinerCards(props) {
    const dados = [['A', 'p'], ['B', 'p'], ['C', 'b'], ['D', 'b'], ['E', 'b'], ['F', 'b'], ['G', 'b'], ['H', 'b'], ['I', 'b'], ['J', 'b'], ['K', 'b'], ['L', 'b'], ['M', 'b'], ['N', 'b'], ['O', 'b'], ['P', 'b'], ['Q', 'b'], ['R', 'b'], ['S', 'b'], ['T', 'b'], ['U', 'b'], ['V', 'b'], ['W', 'b'], ['X', 'b'], ['Y', 'b'], ['Z', 'b']]
    return (
        <main ref={props.refe}>
            <div className="VoltarEntrada" onClick={props.voltar}><img src={ImgVoltar} alt="Voltar" /></div>
            {dados.map((letra, i) => (
                <Card chave={i} letra={letra[0]} desativado={letra[1]}
                    dadosinfo={props.dados.dadosinfo[letra[0]]}
                    dadosimg={props.dados.dadosimg[letra[0]]}
                    add={props.add} fecha={props.fecha}
                ></Card>
            ))}
        </main>
    )
}

export default ConteinerCards