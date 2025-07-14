import { useState } from 'react'
import './EscolherDificuldade.scss'
import Jogo from './playgame/jogo'


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

    const [InfoDifi, SetInfo] = useState()

    return (
        <div className="Escolher-wraper">
            <h1>🧠 Jogo da Memória</h1>
            <div className="Escolher">
                <button
                    onClick={() => Add(dificuldades.facil.tempo, dificuldades.facil.tentativas)}
                    onMouseEnter={() => SetInfo(<InforExbir backgroud="#81c784" color="#2e7d32" tempo="2:00" tenta="10"></InforExbir>)}
                    onMouseLeave={() => SetInfo('')}
                >Facil</button>
                <button
                    onClick={() => Add(dificuldades.medio.tempo, dificuldades.medio.tentativas)}
                    onMouseEnter={() => SetInfo(<InforExbir backgroud="#ffd54f" color="#ff8f00" tempo="1:30" tenta="8"></InforExbir>)}
                    onMouseLeave={() => SetInfo('')}
                >Médio</button>
                <button
                    onClick={() => Add(dificuldades.dificil.tempo, dificuldades.dificil.tentativas)}
                    onMouseEnter={() => SetInfo(<InforExbir backgroud="#ef5350" color="#c62828" tempo="1:00" tenta="5"></InforExbir>)}
                    onMouseLeave={() => SetInfo('')}
                >Dificil</button>
                <button
                    onClick={() => Add(dificuldades.extremo.tempo, dificuldades.extremo.tentativas)}
                    onMouseEnter={() => SetInfo(<InforExbir backgroud="#ab47bc" color="#6a1b9a" tempo="0:45" tenta="3"></InforExbir>)}
                    onMouseLeave={() => SetInfo('')}
                >Extremo</button>
                {InfoDifi}
            </div>
        </div>
    )
}

export default Escolher