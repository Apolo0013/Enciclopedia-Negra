import './entrada.css'
import imgnegros1370 from '../img/punhos-negros-1370.webp'
import ConteinerCards from './conteinercards.jsx'
import { useRef } from 'react'


function Entrada(props) {
    function Explorar() {
        RefConteiner.current.classList.add('Sumir')
        setTimeout(() => {
            props.Set(<ConteinerCards add={props.add} refe={props.refe}></ConteinerCards>)
        }, 1000)
    }

    //ref
    const RefConteiner = useRef()

    return (
        <div className="SubEnter" ref={RefConteiner}>
            <img src={imgnegros1370} alt="" />
            <div className="Conteiner Opshow" >
                <h1>Enciclopédia Negra</h1>
                <p>Um espaço para descobrir artistas negros de A a Z.
                    Histórias, obras e representatividade em um só lugar.</p>
                <button onClick={Explorar}>Explorar agora</button>
            </div>
            
        </div>
    )
}

export default Entrada