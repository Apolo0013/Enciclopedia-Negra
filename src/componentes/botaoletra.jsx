
import './botaoletra.css'

function BotaoLetra(props) {
    function Scroll(elemento) {
        console.log(elemento)
        elemento.scrollIntoView({
            behavior: "smooth",  // rolagem suave
            block: "start"       // alinha ao topo
        })
    }
    return (
        <div className="botao" onClick={() => {
            Scroll(props.refe.current)
        }}>
            {props.letra}
        </div>
    )
}

export default BotaoLetra