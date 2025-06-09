import './conteinerartista.css'
import imgfecha from '../../img/fechaimg.webp'
import CardArtista from './cardartista.jsx'
import { useEffect, useRef, useState } from 'react'

function ConteinerArtista(props) {
    function Scroll(e) {
        e.scrollIntoView({
        behavior: "smooth",  // anima o scroll
        block: "start"       // posiciona o elemento no topo da viewport
        })
    }

    function FormatConteiner() {
        let ListConteiner = []
        let conteiner = null
        for (let index = 0; index < props.dadosinfo.length; index++) {
            let scrollauto = false
            if (props.dadosinfo[index].Nome === props.nome) {
                scrollauto = true
            }

            conteiner = (
                <CardArtista
                    ref={RefConteiner}
                    fotoartista={props.dadosimg?.[`artista${index + 1}`].foto}
                    nome={props.dadosinfo?.[index]?.Nome}
                    idade={props.dadosinfo?.[index]?.Idade}
                    profissoes={props.dadosinfo?.[index]?.Profissoes}
                    biografia={props.dadosinfo?.[index]?.Biografia}
                    textos_obras={props.dadosinfo?.[index]?.texto_obras}
                    legado={props.dadosinfo?.[index]?.legado}
                    imgobras={[props.dadosimg?.[`artista${index + 1}`]?.obras[0], props.dadosimg?.[`artista${index + 1}`]?.obras[1]]}
                    scroll={Scroll}
                    scrollauto={scrollauto}
                ></CardArtista>)
            ListConteiner.push(conteiner)
        }
        SetConteines(ListConteiner)
    }


    const RefConteiner = useRef()
    const [Conteines, SetConteines] = useState([])
    useEffect(() => FormatConteiner(), [])

    return (
        <div className="wrraperConteinerArtista">
            <div className="ConteinerArtista" ref={RefConteiner}>
                <img src={imgfecha} onClick={props.fecha} alt="" />
                <div className="ConteinerCards">
                    {Conteines}
                </div>
            </div>
        </div>
    )  
}

export default ConteinerArtista