import { useEffect, useRef, useState } from 'react'
import './EscolherDificuldade.scss'
import Jogo from './playgame/jogo'
//media query.js, um @media em js
import { useMediaQuery } from '../../../utils/mediaquery'

function InforExbir({tempo, tenta, backgroud, color}) {
    return (
        <div className="ConteinerInfo" style={{ background: backgroud, color: color }}>
            <span>
                <h3>Tempo</h3>
                <h2>{tempo}</h2>
            </span>
            <span>
                <h3>Tentativas</h3>
                <h2>{tenta}</h2>
            </span>
        </div>
    )
}


function Escolher({SetConteiner, BgRef, SetAviso}) {
    const dificuldades = {
        facil: {    
            tempo: 120,        // segundos
            tentativas: 12     // pode errar 12 vezes
        },
        medio: {
            tempo: 90,
            tentativas: 8
        },
        dificil: {
            tempo: 60,
            tentativas: 5
        },
        extremo: {
            tempo: 45,
            tentativas: 3
        }
    }

    function Add(tempo, tenta) {
        SetConteiner(<Jogo
            SetCon={() => SetConteiner(
                <Escolher
                    SetConteiner={SetConteiner}
                    BgRef={BgRef}
                    SetAviso={SetAviso} />)}
            SetAvi={SetAviso} RefBg={BgRef} tempo={tempo} tenta={tenta} />)
    }
    //Adpitacao pae
    const UserCelular = useMediaQuery('(max-width: 500px) and (pointer: coarse)')

    const [InfoDifi, SetInfo] = useState() // state, que vai exbir as informacao pos passa o mouse por cima pae
    //lista de info
    const RefListInfoComp = useRef({
        facil: <InforExbir backgroud="#81c784" color="#2e7d32" tempo="2:00" tenta="10"></InforExbir>,
        medio: <InforExbir backgroud="#ffd54f" color="#ff8f00" tempo="1:30" tenta="8"></InforExbir>,
        dificil: <InforExbir backgroud="#ef5350" color="#c62828" tempo="1:00" tenta="5"></InforExbir>,
        extremo: <InforExbir backgroud="#ab47bc" color="#6a1b9a" tempo="0:45" tenta="3"></InforExbir>
    })
    /////////////////////////////////////////////////////////////////////////////////
    //adpitacao para celular, vamos cria 4 state para guardar os infor de cada botao, no celular nao temos hover, entao vamos exbir estaticamente.
    const [stateinfofacil, Setinfofacil] = useState()
    const [stateinfomedio, Setinfomedio] = useState()
    const [stateinfodificil, Setinfodificil] = useState()
    const [stateinfoextremo, Setinfoextremo] = useState()

    useEffect(() => {
        if (UserCelular) {
            Setinfofacil(RefListInfoComp.current.facil)
            Setinfomedio(RefListInfoComp.current.medio)
            Setinfodificil(RefListInfoComp.current.dificil)
            Setinfoextremo(RefListInfoComp.current.extremo)
        }
        else {
            Setinfofacil('')
            Setinfomedio('')
            Setinfodificil('')
            Setinfoextremo('')
        }
    }, [UserCelular])
    return (
        <div className="Escolher-wraper">
            <h1>🧠 Jogo da Memória</h1>
            <div className="Escolher">
                <span className="botao-wraper">
                    <button
                        className='botao-facil-dificuldade'
                        onClick={() => Add(dificuldades.facil.tempo, dificuldades.facil.tentativas)}
                        onMouseEnter={() => SetInfo(RefListInfoComp.current.facil)}
                        onMouseLeave={() => SetInfo('')}
                    >Facil</button>
                    {stateinfofacil}
                </span>
                <span className="botao-wraper">
                    <button
                        className='botao-medio-dificuldade'
                        onClick={() => Add(dificuldades.medio.tempo, dificuldades.medio.tentativas)}
                        onMouseEnter={() => SetInfo(RefListInfoComp.current.medio)}
                        onMouseLeave={() => SetInfo('')}
                    >Médio</button>
                    {stateinfomedio}
                </span>
                <span className="botao-wraper">
                    <button
                        className='botao-dificil-dificuldade'
                        onClick={() => Add(dificuldades.dificil.tempo, dificuldades.dificil.tentativas)}
                        onMouseEnter={() => SetInfo(RefListInfoComp.current.dificil)}
                        onMouseLeave={() => SetInfo('')}
                    >Dificil</button> 
                    {stateinfodificil}
                </span>
                <span className="botao-wraper">
                    <button
                        className='botao-extremo-dificuldade'
                        onClick={() => Add(dificuldades.extremo.tempo, dificuldades.extremo.tentativas)}
                        onMouseEnter={() => SetInfo(RefListInfoComp.current.extremo)}
                        onMouseLeave={() => SetInfo('')}
                    >Extremo</button>
                    {stateinfoextremo}
                </span>
                {InfoDifi}
            </div>
        </div>
    )
}

export default Escolher