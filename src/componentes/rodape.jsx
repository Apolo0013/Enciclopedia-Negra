import { useRef } from 'react'
import './entrada.scss'
import { useNavigate } from 'react-router-dom'
import lupa from '../img/lupa.webp'
import MenuImg from '../img/menu.webp'

function Rodape({classop_menu, rodape_outros}) { // classop: class opcional, como uma class que alterar a posicao
    const RefRodape = useRef()
    const RefRodapeState = useRef(false) // ele vai verificar se o rodape esta aberto ounao
    const nv = useNavigate()
    return (
        <div className={`Rodape ${rodape_outros ? 'rodape-outros' : ''}`} ref={RefRodape}>
            <div className={`menu-mobile ${classop_menu}`} onClick={() => {
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
            {
                //rodape outro é outro estilo, o inicio terar o rodape proprio o default
            }
            <div className='Nome-Rodape'>
                <h3>ENCICLOPÉDIA NEGRA</h3>
                <hr />
            </div>
            <p onClick={() => {nv('/home/')}}>Inicio</p>
            <p onClick={() => {nv('/home/artistas/')}}>Artista</p>
            <p onClick={() => nv('/home/sobre-nós/')}>Sobre Nós</p>
            <span onClick={() => nv('/home/pesquisa')}><img src={lupa} alt="" /></span>
        </div>
    )
}

export default Rodape