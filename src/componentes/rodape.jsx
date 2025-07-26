import { useEffect, useRef } from 'react'
import './rodape.scss'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from '../utils/mediaquery'
//imagem
import lupa from '../img/lupa.webp'
import GameImg from '../img/game.png'
import MenuImg from '../img/menu.webp'

function Rodape({classop_menu, classop, rodape_outros}) { // classop: class opcional,
    //como uma class que alterar a posicao
    
    function MoveSeletorNav(e) {
        const el = e.target
        const leftpx = el.offsetLeft
        const widthel = el.offsetWidth
        //style
        RefSeletor.current.style.transform = `translateX(${leftpx}px) scaleX(1.2)`
        RefSeletor.current.style.width = widthel+'px'
    }

    const RefRodape = useRef()
    const RefRodapeState = useRef(false) // ele vai verificar se o rodape esta aberto 
    //ou nao
    const nv = useNavigate()
    //Ref do saletor nav, apenas um seletor pra fica bonitinho.
    const RefSeletor = useRef()
    //adaptacao com js.
    const UserCelular = useMediaQuery('(pointer: coarse)')

    useEffect(() => {
        if (UserCelular) {
            RefSeletor.current.style.display = 'none'
        }
        else {
            RefSeletor.current.style.display = 'block'
        }
    }, [UserCelular])
    return (
        <div className={`Rodape ${classop ? classop : ''} ${rodape_outros ? 'rodape-outros' : ''}`} ref={RefRodape}>
            <div className={`menu-mobile ${classop_menu ? classop_menu : ''}`} onClick={() => {
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
            <nav>
                <span onClick={() => nv('/home/jogo/jogo-da-momoria/')} onMouseEnter={(e) => MoveSeletorNav(e)}><img src={GameImg} alt="" /></span>
                <p onClick={() => {nv('/home/')}} onMouseEnter={(e) => MoveSeletorNav(e)}>Inicio</p>
                <p onClick={() => {nv('/home/artistas/')}} onMouseEnter={(e) => MoveSeletorNav(e)}>Artista</p>
                <p onClick={() => nv('/home/sobre-nós/')} onMouseEnter={(e) => MoveSeletorNav(e)}>Sobre Nós</p>
                <span onClick={() => nv('/home/pesquisa')} onMouseEnter={(e) => MoveSeletorNav(e)}><img src={lupa} alt="" /></span>
                <div className='seletor-nav' ref={RefSeletor}></div>
            </nav>
        </div>
    )
}

export default Rodape