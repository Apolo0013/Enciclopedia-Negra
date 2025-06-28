
import './entrada.scss'
//imgs
import imgnegros1370 from '../img/punhos-negros-1370.webp'

//componentes
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Rodape from './rodape'


function Entrada() {
    function Explorar() {
        RefConteiner.current.classList.add('Sumir')
        nv('/home/artistas/')
    }

    const nv = useNavigate()
    //ref
    const RefConteiner = useRef()
    return (
        <div className="SubEnter" ref={RefConteiner}>
            <Rodape></Rodape>
            <img src={imgnegros1370} alt="" />
            <div className="Conteiner Opshow" >
                <p>Um espaço para descobrir artistas negros de A a Z.
                    Histórias, obras e representatividade em um só lugar.</p>
                <button onClick={Explorar}
                >Explorar Agora</button>
            </div>
            
        </div>
    )
}

export default Entrada