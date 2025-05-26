import './card.css'
import { useEffect, useRef } from 'react'

function Card(props) {
    
    const refcard = useRef()
    
    useEffect(() => {
        const ob = new IntersectionObserver((elementos) => {
            const elemento = elementos[0]
            if (elemento.isIntersecting) {
                refcard.current.classList.remove('hidden')
                refcard.current.classList.add('show')
            }
            else {
                refcard.current.classList.remove('show')
                refcard.current.classList.add('hidden')
            }
        })

        ob.observe(refcard.current)
    }, [])

    return (
        <div className="card">
            <span className="aba"><span></span></span>
            <div className="cardsub hidden" ref={refcard}>
                <span></span>
                <p>{props.letra}</p>
                <div><button onClick={props.add}>Ver</button></div>
            </div>
    </div>
    )
}


export default Card