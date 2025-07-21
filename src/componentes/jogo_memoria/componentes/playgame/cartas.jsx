import { useEffect, useRef } from 'react'
import './cartas.scss'

function Carta({ img, value, Toque, id, RefGetCard, RefGetConteinerCard}) {
    const RefCard = useRef() // ref do card
    const RefConteiner = useRef() // ref do conteiner
    //limitado do useEffect, para se chamado apenas uma vez.
    const ControleUseEffect = useRef(false)
    useEffect(() => {
        if (ControleUseEffect.current) return
        ControleUseEffect.current = true
        //pegendo as ref do card
        RefGetCard.current.push(RefCard.current)
        //pegando a ref do conteiner
        RefGetConteinerCard.current.push(RefConteiner.current)
    }, [])
    return (
        <div className="carta-conteiner" onClick={() => Toque(value, id, RefCard, RefConteiner)} ref={RefConteiner}>
            <div className="carta-conteinersub" ref={RefCard}>
                <div>?</div>
                <div><img src={img} alt="" /></div>
            </div>
        </div>
    )
}

export default Carta