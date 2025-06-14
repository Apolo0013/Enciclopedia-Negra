import './conteinerartista.css'
import imgfecha from '../../img/fechaimg.webp'
import CardArtista from './cardartista.jsx'
import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { GetValores } from '../../Context.jsx'

function ConteinerArtista(props) {
    const nv = useNavigate()
    const {dadosimg, dadosinfo} = GetValores()

    function Scroll(e) {
        e.scrollIntoView({
        behavior: "smooth",  // anima o scroll
        block: "start"       // posiciona o elemento no topo da viewport
        })
    }

    function FormatConteiner() {
        const letra = local.state.letra // letra fornecida pelo card.jsx
        let ListConteiner = []
        let conteiner = null
        for (let index = 0; index < dadosinfo[letra].length; index++) {
            console.log(index)
            let scrollauto = false
            if (local.state.nome === dadosinfo?.[letra]?.[index]?.Nome) {
                scrollauto = true
            }
            conteiner = (
                <CardArtista
                    ref={RefConteiner}
                    fotoartista={dadosimg?.[letra]?.[`artista${index + 1}`].foto}
                    nome={dadosinfo?.[letra]?.[index]?.Nome}
                    idade={dadosinfo?.[letra]?.[index]?.Idade}
                    profissoes={dadosinfo?.[letra]?.[index]?.Profissoes}
                    biografia={dadosinfo?.[letra]?.[index]?.Biografia}
                    textos_obras={dadosinfo?.[letra]?.[index]?.texto_obras}
                    legado={dadosinfo?.[letra]?.[index]?.legado}
                    imgobras={[dadosimg?.[letra]?.[`artista${index + 1}`]?.obras[0], dadosimg?.[letra]?.[`artista${index + 1}`]?.obras[1]]}
                    scroll={Scroll}
                    scrollauto={scrollauto}
                ></CardArtista>)
            ListConteiner.push(conteiner)
        }
        SetConteines(ListConteiner)
    }


    const RefConteiner = useRef()
    const [Conteines, SetConteines] = useState([])
    const local = useLocation()
    useEffect(() => {
        FormatConteiner()
        console.log(local.state.url)
    }, [])

    return (
        <div className="ConteinerArtista" ref={RefConteiner}>
            <img src={imgfecha} onClick={() => local.state.url ? nv(local.state.url) : nv('/home/artistas/')} alt="" />
            <div className="ConteinerCards">
                {Conteines}
            </div>
        </div>
    )  
}

export default ConteinerArtista