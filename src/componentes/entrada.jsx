
import './entrada.scss'
//imgs
import Back1 from '../img/backimg1.webp'
import Back2 from '../img/backimg2.webp'
//componentes
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Rodape from './rodape'


function Entrada() {
    function TrocarDeImagemFundo() {
        if (RefTrocaImg.current) {
            //alterando valor da variavel para se possivel a troca das imagens
            RefTrocaImg.current = false
            //tirar as class
            //back2 a imagem que nao queremos
            RefImgBack2.current.classList.add('desativar') // desativar ela
            RefImgBack2.current.classList.remove('ativar') // e removendo a class que ativar pae.
            //Back1 a imagem que iremo coloca agora
            RefImgBack1.current.classList.add("ativar") // add ele no fundo, ou seja ativando
            RefImgBack1.current.classList.remove("desativar") // removendo a class que tirar ele de fundo.
            console.log('add img1')
        }
        else {
            console.log('add img2')
            //alterando a variavel para a troca das imagem
            RefTrocaImg.current = true
            //Removendo a img que nao queremos
            RefImgBack1.current.classList.add("desativar")
            RefImgBack1.current.classList.remove('ativar')
            //Add a imagem que nois queremos
            RefImgBack2.current.classList.add("ativar")
            RefImgBack2.current.classList.remove("desativar")
        }
    }


    function Explorar() {
        RefConteiner.current.classList.add('Sumir')
        nv('/home/artistas/')
    }

    const nv = useNavigate()
    //ref
    const RefConteiner = useRef()
    const RefImgBack1 = useRef()
    const RefImgBack2 = useRef()
    const RefTrocaImg = useRef(true)
    useEffect(() => {
        const loop = setInterval(() => {
            TrocarDeImagemFundo()
        }, 60000)
        return () => clearInterval(loop)
    }, [])
    return (
        <div className="SubEnter" ref={RefConteiner}>
            <Rodape rodape_outros={false}></Rodape>
            <img ref={RefImgBack1} src={Back1} alt="Imagem back1"/>
            <img ref={RefImgBack2} src={Back2} alt="Imagem back2"/>
            <div className="Conteiner Opshow" >
                <h1>ENCICLOPÉDIA NEGRA</h1>
                <p>Um espaço para descobrir artistas negros de A a Z.
                    Histórias, obras e representatividade em um só lugar.</p>
                <button onClick={Explorar}
                >Explorar Agora</button>
            </div>
            
        </div>
    )
}

export default Entrada