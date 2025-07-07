import './pesquisa.scss'
import imglupa from '../img/pesquisa.png'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import dados from '../dados.json'
import { GetValores } from '../Context'
import PesquisaCard from './Artista/cardpesquisa.jsx'
import Rodape from './rodape.jsx'
import HomeExit from './exithome'

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
                console.log(`artista${indexartista}`)
                if (String(valor.Nome).toLowerCase().includes(valordigitado)) {
                    listanome.push({
                        ValorExbir: valor.Nome,
                        letra: list[0],
                        img : dadosimg[list[0]][`artista${indexartista}`].foto
                    })
                    console.log(dadosimg[list[0]].artista1.foto)
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
    //navegador
    return (
        <div className="wrapperPesquisa-Conteiner">
            <Rodape rodape_outros={true}></Rodape>
            <div className="pesquisa-conteiner">
                <div className="pesquisawrapper">
                    <div className="pesquisa">
                        <img src={imglupa} alt="lupa" onClick={() => InputRef.current.focus()}/>
                        <input type="text" placeholder='Pesquisa por artista' onChange={(e) => Pesquisa(e)} ref={InputRef} />
                    </div>
                </div>
                <div className="resultado">
                    {
                        PesquisaResultado.map((valor, i) => (
                            <PesquisaCard key={i} letra={valor.letra} img={valor.img} nome={valor.ValorExbir} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Pesquisa