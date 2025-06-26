import './cardartista.scss'
import { useEffect, useRef, useState} from 'react'

function CardArtista(props) {
    const RefCardConteiner = useRef()
    const RefVer = useRef(false)
    const [NomeVer, SetVer] = useState('Ver Mais')

    return (
        <div className="wraper-cardartista">
            <span className="Ver" onClick={() => {
                if (!RefVer.current) {
                    RefVer.current = true
                    RefCardConteiner.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    SetVer('Ver Menos')
                    RefCardConteiner.current.classList.add('fun-vermais')
                    RefCardConteiner.current.classList.remove('fun-vermenos')
                }
                else {
                    RefVer.current = false
                    RefCardConteiner.current.classList.add('fun-vermenos')
                    RefCardConteiner.current.classList.remove('fun-vermais')
                    SetVer('Ver Mais')
                }
            }}>{NomeVer}</span>
            <div className="CardArtista fun-vermenos" ref={RefCardConteiner}>
                <div className="infoartista">
                    <img src={props.fotoartista} alt="Arisita" />
                    <h2>{props.idade}</h2>
                    <span>
                        {
                            props.profissoes.map((valor, i) => (
                                <div key={i}>{valor}</div>
                            ))
                        }
                    </span>
                </div>
                <div className="BioEObras">
                    <h1>
                        {props.nome}
                    </h1>
                    <section className="biografia">
                        <p>
                            {props.biografia}
                        </p>
                    </section>
                    <section className="Obras">
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
        </div>
    )
}

export default CardArtista
