import './botoes.scss'
//imagens
//funcoes imagem
import HomeImg from '../../img-jogo/home.png'
import LoopImg from '../../img-jogo/loop.png'
import { useRef, useState } from 'react'

function Botoes({ cbloop, cbhome }) {
    function CallBackClick(callBack) {
        if (LimiteClick.current) { return }
        SetClass("desativorbotao")
        LimiteClick.current = true
        setTimeout(() => {
            SetClass("")
            LimiteClick.current = false
        }, 10000) 
        callBack()
    }

    //variavel resposnavel por controlar os click, para evitar conflitos com variavels
    const LimiteClick = useRef(false)
    //state class
    const [ClassImgButton, SetClass] = useState()
    return (
        <div className="Conteiner-Botao">
            <img className={ClassImgButton} src={LoopImg} alt="" onClick={() => CallBackClick(cbloop)}/>
            <img className={ClassImgButton} src={HomeImg} alt="" onClick={() => CallBackClick(cbhome)} />
        </div >
    )
}

export default Botoes