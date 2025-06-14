import { useEffect, useRef } from 'react'
import './cardpesquisa.scss'
import { useNavigate } from 'react-router-dom'

function PesquisaCard({ letra, img, nome }) {
    
    const RefCard = useRef()

    useEffect(() => {
        const ob = new IntersectionObserver(([entrada]) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.remove('hidden')
                entrada.target.classList.add('show')
            }
        })
        ob.observe(RefCard.current)
    }, [])

    const nv = useNavigate()

    return (
        <div className="cardpesquisa hidden" ref={RefCard} onClick={() => nv(`/home/artistas/artista/${letra}`, { state: { letra: letra, url: '/home/pesquisa/' }})}>
            <img src={img} alt={nome} />
            <h2>{nome}</h2>
        </div>
    )
}


export default PesquisaCard