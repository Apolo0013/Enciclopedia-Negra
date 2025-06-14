
import './entrada.scss'
//imgs
import imgnegros1370 from '../img/punhos-negros-1370.webp'
import lupa from '../img/lupa.webp'
import MenuImg from '../img/menu.webp'
//componentes
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'


function Entrada() {
    function Explorar() {
        RefConteiner.current.classList.add('Sumir')
        nv('/home/artistas/')
    }

    const nv = useNavigate()
    //ref
    const RefConteiner = useRef()
    const RefRodape = useRef()
    const RefRodapeState = useRef(false) // ele vai verificar se o rodape esta aberto ou nao
    
    return (
        <div className="SubEnter" ref={RefConteiner}>
            <div className="Rodape" ref={RefRodape}>
                <div className="menu-mobile" onClick={() => {
                    if (!RefRodapeState.current) {
                        RefRodapeState.current = true
                        RefRodape.current.classList.add('show-rodape')
                    }
                    else {
                        RefRodapeState.current = false
                        RefRodape.current.classList.remove('show-rodape')
                    }
                }}>
                    <img src={MenuImg} alt="" />
                </div>
                <p onClick={() => nv('/home/sobre-nós/')}>Sobre Nós</p>
                <span onClick={() => nv('/home/pesquisa')}><img src={lupa} alt="" /></span>
            </div>
            <img src={imgnegros1370} alt="" />
            <div className="Conteiner Opshow" >
                <h1>ENCICLOPÉDIA NEGRA</h1>
                <p>Um espaço para descobrir artistas negros de A a Z.
                    Histórias, obras e representatividade em um só lugar.</p>
                <button onClick={
                    Explorar
                }
                >Explorar agora</button>
            </div>
            
        </div>
    )
}

export default Entrada