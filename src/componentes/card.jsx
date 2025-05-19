import './card.css'
import { useEffect, useRef } from 'react'

function Card(props) {

    function FormatNomePseudo() { return String(props.Nome).split(' ')[0] } // pegando so primeiro nome dele pae
    function FormatNomeTitulo() {  // se o nome passa de 41 simplemente so vamos corta
        if (props.Nome.length >= 40) {
            return String(props.Nome).slice(0, 37) + '...'
        }
        return props.Nome
    }

    //ref
    //ref dos nome formatados
    const NomePseudo = useRef(FormatNomePseudo())
    const NomeTitulo = useRef(FormatNomeTitulo())
    useEffect(() => {
        const ob = new IntersectionObserver((entrada) => {
            const entry = entrada[0]
            if (entry.isIntersecting) {
                props.refe.current.classList.remove('hidden')
                props.refe.current.classList.add('show')
            }
            else {
                props.refe.current.classList.remove('show')
                props.refe.current.classList.add('hidden')
            }
        })

        ob.observe(props.refe.current)
    })
    return (
        <div className="wraper hidden" ref={props.refe}>
            <div className="card">
                <div className="foto" data-text={NomePseudo.current}><img src={props.img} alt="" /></div>
                <div className="info">
                    <h2>{ NomeTitulo.current }</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta dignissimos ad aliquam unde fugiat placeat temporibus officiis, commodi modi molestiae nam quis ipsa, obcaecati autem aut. Voluptate, odio laboriosam.</p>
                </div>
                <h3> { props.letra } </h3>
            </div>
        </div>
    )
}


export default Card