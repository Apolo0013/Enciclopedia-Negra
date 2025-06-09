import './card.css'
import { useEffect, useRef } from 'react'

function Card(props) {
    
    const refcardwrraper = useRef()
    const refcard = useRef()
    console.log(props.dadosimg)
    console.log(props.dadosinfo)
    useEffect(() => {
        if (props.desativado === 'b') {
            refcardwrraper.current.classList.add('disabled')
            return
        }
        const ob = new IntersectionObserver((elementos) => {
            try {const elemento = elementos[0]
                if (elemento.isIntersecting) {
                    refcard.current.classList.remove('hidden')
                    refcard.current.classList.add('show')
                }
                else {
                    refcard.current.classList.remove('show')
                    refcard.current.classList.add('hidden')
                }
            } catch {
                ob.disconnect()
            }
        })

        ob.observe(refcard.current)
    }, [])

    return (
        <div className="card" key={props.chave} ref={refcardwrraper}>
            <span className="aba"><span></span></span>
            <div className="cardsub hidden" ref={refcard}>
                <span></span>
                <p>{props.letra}</p>
                <div><button onClick={() => props.add(props.dadosinfo, props.dadosimg, false)}>Ver</button></div>
            </div>
    </div>
    )
}


export default Card