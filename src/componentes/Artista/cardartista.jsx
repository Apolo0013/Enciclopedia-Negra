import './cardartista.css'
import { useEffect, useRef} from 'react'

function CardArtista(props) {
    const RefCard = useRef()
    const RefScrollAuto = useRef(true)
    const ScrollUsado = useRef(false)
    useEffect(() => {
        if (props.scrollauto) {
            props.scroll(RefCard.current)
            setTimeout(() => RefScrollAuto.current = false, 2000)
        }
        console.log(props.dados)
    })

    return (
        < div className="CardArtista" onMouseEnter={(e) => {
                if (!RefScrollAuto.current || !ScrollUsado.current) {
                    console.log('scroll auxiliar')
                    ScrollUsado.current = true
                    props.scroll(e.target)
                }
            }}
            onMouseLeave={() => ScrollUsado.current = false}
            
            ref={RefCard}
        >
            <div className="infoArtista">
                <img src={props.fotoartista} alt="Foto do Artista" />
                <span>
                    <div>
                        <h3>{
                            //string
                            props.idade
                        }</h3>
                    </div>
                    <div>
                        <h2>Profissão</h2>
                        <ul>
                            {
                                //lista
                                props.profissoes.map((valor, i) => (
                                    <li key={i}>{valor}</li>
                                ))
                            }
                        </ul>
                    </div>
                </span>
            </div>
            <div className="bio" onMouseEnter={() => props.ref.current.classList.add('NoScrollY')} onMouseLeave={() => props.ref.current.classList.remove('NoScrollY')}>
                <div>    
                    <h2>{props.nome}</h2>
                    <section className="biografia">
                        <p>{props.biografia}</p>
                    </section>
                    <section className="obras">
                        <section>
                            <h3>{props.textos_obras.obra1[0]}</h3>
                            <div><img src={props.imgobras[0]} alt="img" /></div>
                            <p>{props.textos_obras.obra2[1]}</p>
                        </section>
                        <section>
                            <h3>{props.textos_obras.obra2[0]}</h3>
                            <div><img src={props.imgobras[1]} alt="img" /></div>
                            <p>{props.textos_obras.obra2[1]}</p>
                        </section>
                        <section>
                            <h3>Legado</h3>
                            <p>
                                {props.legado}
                            </p>
                        </section>
                    </section>
                </div>
            </div>
        </div >
    )
}

export default CardArtista