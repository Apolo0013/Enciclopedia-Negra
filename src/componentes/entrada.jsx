
import './entrada.scss'
//imgs
import Back1 from '../img/back_home/1.webp'
import Back2 from '../img/back_home/2.webp'
import Back3 from '../img/back_home/3.webp'
import Back4 from '../img/back_home/4.webp'
import Back5 from '../img/back_home/5.webp'
import Back6 from '../img/back_home/6.webp'
import Back7 from '../img/back_home/7.webp'
import Back8 from '../img/back_home/8.webp'
import Back9 from '../img/back_home/9.webp'
import Back10 from '../img/back_home/10.webp'

//componentes
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Rodape from './rodape'
import Contador_Visitas from './contador-visitas'
import Rodape_bottom from './rodape-bottom'


function Entrada() {
    function randint(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    function TrocaFundo(Lista_Img) { // vai receber a lista de imagem pae
        const lenlista = Lista_Img.length - 1 
        let indeximg = RefImgIndexStart.current
        RefLoopTrocaimg.current = setInterval(() => {
            //indices das imagem pae
            //imagem que vai  sair
            let imgsair = indeximg
            //imagem que vai entrar
            indeximg ++ //para proxima imagem
            let imgentrar = indeximg
            ////////////////////////
            // verificando se o cada eles entao no começo ou fim.
            if (indeximg === lenlista + 1) { // se o indeximg estive com valor, que o numero maximo de indice da lista fornecidas.
                imgsair = lenlista // pegando valor, ou pegando o ultimo indice da lista
                imgentrar = 0 // 0, indice de inicio.
                //reniciando o index
                indeximg = 0
            }
            /////////////////////////////////////////////////////////////////////////
            //pegandos os elemento que estao dentro da lista 
            let imgelementsair = Lista_Img[imgsair].current
            let imgelemententrar = Lista_Img[imgentrar].current
            //add as class
            //removendo
            imgelementsair.classList.remove('ativar')
            imgelementsair.classList.add('desativar')
            //ativando
            imgelemententrar.classList.remove('desativar')
            imgelemententrar.classList.add('ativar')
        }, 15000)
    }

        
    function Explorar() {
        RefConteiner.current.classList.add('Sumir')
        nv('/home/artistas/')
    }

    const nv = useNavigate()
    //ref
    const RefConteiner = useRef()
    //state imagem pae.
    const [BackImg, SetImgs] = useState()
    //Referencias pae.
    const RefBack1 = useRef()
    const RefBack2 = useRef()
    const RefBack3 = useRef()
    const RefBack4 = useRef()
    const RefBack5 = useRef()
    const RefBack6 = useRef()
    const RefBack7 = useRef()
    const RefBack8 = useRef()
    const RefBack9 = useRef()
    const RefBack10 = useRef()
    //controlado de useEffetc
    const RefControeleeffect = useRef(false)
    //loop da troca de img
    const RefLoopTrocaimg = useRef()
    //imagem inicial que sera indentificando com numero pae
    const RefImgIndexStart = useRef(randint(0, 9))
    useEffect(() => {
        if (RefControeleeffect.current) return 
        RefControeleeffect.current = true
        const Lista_Img = [ // as imagem que vao fica no fundo
                         // indenx img inicial        index da imagem
            <img key='1' className={RefImgIndexStart.current === 0 ? '' : 'desativador'} src={Back1} ref={RefBack1} alt="imagem de fundo" />,
            <img key='2' className={RefImgIndexStart.current === 1 ? '' : 'desativador'} src={Back2} ref={RefBack2} alt="imagem de fundo" />,
            <img key='3' className={RefImgIndexStart.current === 2 ? '' : 'desativador'} src={Back3} ref={RefBack3} alt="imagem de fundo" />,
            <img key='4' className={RefImgIndexStart.current === 3 ? '' : 'desativador'} src={Back4} ref={RefBack4} alt="imagem de fundo" />,
            <img key='5' className={RefImgIndexStart.current === 4 ? '' : 'desativador'} src={Back5} ref={RefBack5} alt="imagem de fundo" />,
            <img key='6' className={RefImgIndexStart.current === 5 ? '' : 'desativador'} src={Back6} ref={RefBack6} alt="imagem de fundo" />,
            <img key='7' className={RefImgIndexStart.current === 6 ? '' : 'desativador'} src={Back7} ref={RefBack7} alt="imagem de fundo" />,
            <img key='8' className={RefImgIndexStart.current === 7 ? '' : 'desativador'} src={Back8} ref={RefBack8} alt="imagem de fundo" />,
            <img key='9' className={RefImgIndexStart.current === 8 ? '' : 'desativador'} src={Back9} ref={RefBack9} alt="imagem de fundo" />,
            <img key='10' className={RefImgIndexStart.current === 9 ? '' : 'desativador'} src={Back10} ref={RefBack10} alt="imagem de fundo" />
            

        ]
        SetImgs(Lista_Img) // add a lista de com a tag img

        const ListaRef_Img = [ // Lista de Referencia das tag de cima ai pae
            RefBack1,
            RefBack2,
            RefBack3,
            RefBack4,
            RefBack5,
            RefBack6,
            RefBack7,
            RefBack8,
            RefBack9,
            RefBack10
        ]

        TrocaFundo(ListaRef_Img) // chamando a funcao

        return () => clearInterval(RefLoopTrocaimg.current) //finalizando o loop
    }, [])
    return (
        <div className="SubEnter" ref={RefConteiner}>
            <Rodape rodape_outros={false}></Rodape>
            {BackImg}
            <div className="Conteiner Opshow" >
                <h1>ENCICLOPÉDIA NEGRA</h1>
                <p>Um espaço para descobrir artistas negros de A a Z.
                    Histórias, obras e representatividade em um só lugar.</p>
                <button onClick={Explorar}
                >Explorar Agora</button>
            </div>
            <Contador_Visitas/>
        </div>
    )
}

export default Entrada