//componentes
import BotaoNav from './componentes/botaoletra.jsx'
import Card from './componentes/card.jsx'
//imagens
import ImgPunho from './img/punho.png'
import imgFoto from './img/ex.jpg'
import imgarco from './img/arco.png'
//nao sei
import './App.css';
import { useEffect, useRef } from 'react';


function App() {
    //Refs
    //main
    const RefMain = useRef()
    //haeder
    const RefHeader = useRef()
    //botao fdp
    const RefBotaoVoltar = useRef()
    //artisita
    const RefA = useRef()
    const RefB = useRef()
    const RefC = useRef()
    const RefD = useRef()
    const RefE = useRef()
    const RefF = useRef()
    const RefG = useRef()
    const RefH = useRef()
    const RefI = useRef()
    const RefJ = useRef()
    const RefK = useRef()
    const RefL = useRef()
    const RefM = useRef()
    const RefN = useRef()
    const RefO = useRef()
    const RefP = useRef()
    const RefQ = useRef()
    const RefR = useRef()
    const RefS = useRef()
    const RefT = useRef()
    const RefU = useRef()
    const RefV = useRef()
    const RefW = useRef()
    const RefX = useRef()
    const RefY = useRef()
    const RefZ = useRef()

    useEffect(() => {
        const ob = new IntersectionObserver((entry) => {
            const entrada = entry[0]
            if (!entrada.isIntersecting) {
                setTimeout(() => {RefBotaoVoltar.current.style.display = 'flex'}, 400)
            }
            else {
                setTimeout(() => {RefBotaoVoltar.current.style.display = 'none'}, 400)
            }
        })

        ob.observe(RefHeader.current)
    })

    return (
        <div className="main" ref={RefMain}>
            <div className="BotaoTopo" ref={RefBotaoVoltar} onClick={() => {
                RefBotaoVoltar.current.style.display = 'none'
                RefMain.current.scrollIntoView({
                    behavior: "smooth",  // rolagem suave
                    block: "start"       // alinha ao topo
                })
            }}>
                <img src={imgarco} alt="img" />
            </div>
            <header ref={RefHeader}>
                <img src={ImgPunho} alt="Img" />
                <h1>Enciclopédia Negra</h1>
            </header>
            <nav>
                <BotaoNav letra="A" refe={RefA}></BotaoNav>
                <BotaoNav letra="B" refe={RefB}></BotaoNav>
                <BotaoNav letra="C" refe={RefC}></BotaoNav>
                <BotaoNav letra="D" refe={RefD}></BotaoNav>
                <BotaoNav letra="E" refe={RefE}></BotaoNav>
                <BotaoNav letra="F" refe={RefF}></BotaoNav>
                <BotaoNav letra="G" refe={RefG}></BotaoNav>
                <BotaoNav letra="H" refe={RefH}></BotaoNav>
                <BotaoNav letra="I" refe={RefI}></BotaoNav>
                <BotaoNav letra="J" refe={RefJ}></BotaoNav>
                <BotaoNav letra="K" refe={RefK}></BotaoNav>
                <BotaoNav letra="L" refe={RefL}></BotaoNav>
                <BotaoNav letra="M" refe={RefM}></BotaoNav>
                <BotaoNav letra="N" refe={RefN}></BotaoNav>
                <BotaoNav letra="O" refe={RefO}></BotaoNav>
                <BotaoNav letra="P" refe={RefP}></BotaoNav>
                <BotaoNav letra="Q" refe={RefQ}></BotaoNav>
                <BotaoNav letra="R" refe={RefR}></BotaoNav>
                <BotaoNav letra="S" refe={RefS}></BotaoNav>
                <BotaoNav letra="T" refe={RefT}></BotaoNav>
                <BotaoNav letra="U" refe={RefU}></BotaoNav>
                <BotaoNav letra="V" refe={RefV}></BotaoNav>
                <BotaoNav letra="W" refe={RefW}></BotaoNav>
                <BotaoNav letra="X" refe={RefX}></BotaoNav>
                <BotaoNav letra="Y" refe={RefY}></BotaoNav>
                <BotaoNav letra="Z" refe={RefZ}></BotaoNav>
            </nav>
            <main>
                <Card refe={RefA} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="A"></Card>
                <Card refe={RefB} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="B"></Card>
                <Card refe={RefC} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="C"></Card>
                <Card refe={RefD} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="D"></Card>
                <Card refe={RefE} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="E"></Card>
                <Card refe={RefF} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="F"></Card>
                <Card refe={RefG} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="G"></Card>
                <Card refe={RefH} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="H"></Card>
                <Card refe={RefI} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="I"></Card>
                <Card refe={RefJ} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="J"></Card>
                <Card refe={RefK} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="K"></Card>
                <Card refe={RefL} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="L"></Card>
                <Card refe={RefM} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="M"></Card>
                <Card refe={RefN} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="N"></Card>
                <Card refe={RefO} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="O"></Card>
                <Card refe={RefP} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="P"></Card>
                <Card refe={RefQ} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="Q"></Card>
                <Card refe={RefR} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="R"></Card>
                <Card refe={RefS} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="S"></Card>
                <Card refe={RefT} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="T"></Card>
                <Card refe={RefU} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="U"></Card>
                <Card refe={RefV} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="V"></Card>
                <Card refe={RefW} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="W"></Card>
                <Card refe={RefX} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="X"></Card>
                <Card refe={RefY} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="Y"></Card>
                <Card refe={RefZ} Nome="Apolonio Guilherme Lima da Silva." img={imgFoto} letra="Z"></Card>
            </main>
        </div>
    )
}

export default App;
