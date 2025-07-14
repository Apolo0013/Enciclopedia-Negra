import { useEffect, useRef } from 'react'
import './rodape.scss'
import { useNavigate } from 'react-router-dom'
//imagem
import lupa from '../img/lupa.webp'
import GameImg from '../img/game.png'
import MenuImg from '../img/menu.webp'

function Rodape({classop_menu, classop, rodape_outros}) { // classop: class opcional, como uma class que alterar a posicao
    const RefRodape = useRef()
    const RefRodapeState = useRef(false) // ele vai verificar se o rodape esta aberto ounao
    const nv = useNavigate()

    useEffect(() => {
        if (!classop_menu) {classop_menu = ''}
    }, [])
    return (
        <div className={`Rodape ${classop} ${rodape_outros ? 'rodape-outros' : ''}`} ref={RefRodape}>
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
                <h3 onClick={() => nv('/home/')}>ENCICLOPÉDIA NEGRA</h3>
                <hr />
            </div>
            <span onClick={() => nv('/home/jogo/jogo-da-momoria/')}><img src={GameImg} alt="" /></span>
            <p onClick={() => {nv('/home/')}}>Inicio</p>
            <p onClick={() => {nv('/home/artistas/')}}>Artista</p>
            <p onClick={() => nv('/home/sobre-nós/')}>Sobre Nós</p>
            <span className='left-magin-radape' onClick={() => nv('/home/pesquisa')}><img src={lupa} alt="" /></span>
        </div>
    )
}

export default Rodape