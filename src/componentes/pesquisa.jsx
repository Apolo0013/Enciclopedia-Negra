import './pesquisa.scss'
//imagem
import imglupa from '../img/pesquisa.png'
import UpPage from '../img/up-ceta.png'
//outros
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import dados from '../dados.json'
import { GetValores } from '../Context'
//componentes
import PesquisaCard from './Artista/cardpesquisa.jsx'
import Rodape from './rodape.jsx'
import Rodape_bottom from './rodape-bottom.jsx'

function Pesquisa() {
    function Ondenar(lista, entrada, chave) {
        return lista.sort((a, b) => {
            const aValor = a[chave].toLowerCase();
            const bValor = b[chave].toLowerCase();
            const entradaLower = entrada.toLowerCase();

            const aScore = aValor.startsWith(entradaLower) ? 0 :
                        aValor.includes(entradaLower) ? 1 : 2;

            const bScore = bValor.startsWith(entradaLower) ? 0 :
                        bValor.includes(entradaLower) ? 1 : 2;

            if (aScore !== bScore) return aScore - bScore;

            // Se empatar na prioridade, ordena pelo tamanho do texto
            return aValor.length - bValor.length;
        });
    }


    function Pesquisa(e) {
        const valordigitado = String(e.target.value).toLowerCase()
        let listanome = []
        let indexartista = 1
        for (let list of Object.entries(dados)) {
            for (let valor of list[1]) {
                if (String(valor.Nome).toLowerCase().includes(valordigitado)) {
                    listanome.push({
                        ValorExbir: valor.Nome,
                        letra: list[0],
                        img : dadosimg[list[0]][`artista${indexartista}`].foto
                    })
                }
                indexartista ++
            }
            indexartista = 1
        }
        listanome = Ondenar(listanome, valordigitado, 'ValorExbir')
        if (InputRef.current.value.length === 0) {
            SetPesquisa([])
            return
        }
        SetPesquisa(listanome)
    }


    const {dadosimg} = GetValores()
    const InputRef = useRef()
    //state
    const [PesquisaResultado, SetPesquisa] = useState([])
    //ref do pesquisa conteiner, pra se usado como referencia. no obsevado pae
    const Refpesquisa_conteiner = useRef()
    //Botao voltar para cima do site.
    const RefBotaoBack = useRef()
    useEffect(() => {
        if (!Refpesquisa_conteiner.current) {return}
        const ob = new IntersectionObserver(([el]) => {
            if (!RefBotaoBack.current) {return}
            if (el.isIntersecting) {
                RefBotaoBack.current.classList.add('disabled-elemento')
                RefBotaoBack.current.classList.remove('active-botao-voltar-anima-class')
            }
            else {
                //add animacao
                RefBotaoBack.current.classList.add('active-botao-voltar-anima-class')
                RefBotaoBack.current.classList.remove('disabled-elemento')
            }
        })
        ob.observe(Refpesquisa_conteiner.current) // se dar error é pq o usuario troca de rota pae.
    }, [])
    return (
        <div className="wrapperPesquisa-Conteiner">
            <Rodape rodape_outros={true}></Rodape>
            <div className="pesquisa-conteiner" >
                <div className="pesquisawrapper" ref={Refpesquisa_conteiner}>
                    <div className="pesquisa">
                        <img src={imglupa} alt="lupa" onClick={() => InputRef.current.focus()}/>
                        <input type="text" placeholder='Pesquisa por artista' onChange={(e) => Pesquisa(e)} ref={InputRef} />
                    </div>
                </div>
                <div className="resultado">
                    <span className='botao-voltar-cima-resultado disabled-elemento'
                        ref={RefBotaoBack}
                        onClick={() => {
                            RefBotaoBack.current.classList.add('disabled-elemento')
                            RefBotaoBack.current.classList.remove('active-botao-voltar-anima-class')
                            Refpesquisa_conteiner.current.scrollIntoView({behavior: 'smooth' })
                        }}
                    >
                        <img src={UpPage} alt="" />
                    </span>
                    {
                        PesquisaResultado.map((valor, i) => (
                            <PesquisaCard key={i}
                                letra={valor.letra}
                                img={valor.img} nome={valor.ValorExbir}
                            />
                        ))
                    }
                </div>
            </div>
            <Rodape_bottom />
        </div>
    )
}

export default Pesquisa