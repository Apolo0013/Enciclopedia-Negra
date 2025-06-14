import { useNavigate } from 'react-router-dom'
import './card.css'
import { useEffect, useRef } from 'react'

function Card(props) {
    const refcard = useRef()
    useEffect(() => {
        const ob = new IntersectionObserver((elementos) => {
            try {const elemento = elementos[0]
                if (elemento.isIntersecting) {
                    refcard.current.classList.remove('hidden')
                    refcard.current.classList.add('show')
                }
            } catch {
                ob.disconnect()
            }
        })

        ob.observe(refcard.current)
    }, [])

    const nv = useNavigate()

    return (
        <div className="card hidden" key={props.chave}  ref={refcard}>
            <span className="aba"><span></span></span>
            <div className="cardsub">
                <span></span>
                <p>{props.letra}</p>
                <div><button onClick={() => nv(`/home/artistas/artista/${props.letra}`, {state : {letra: props.letra}})}>Ver</button></div>
            </div>
    </div>
    )
}


export default Card