import './entrada.css'
//imgs
import imgnegros1370 from '../img/punhos-negros-1370.webp'
import imglupa from '../img/pesquisa.png'
import imgcancelar from '../img/cancel.webp'
//imagens dos artista e obras pae
//abdias
import imgfotoabdias from '../img/artista/Abdias/abdias.webp'
import imgobra1obid from '../img/artista/Abdias/1.webp'
import imgobra2obid from '../img/artista/Abdias/2.webp'
//Arthur_Timótheo_da_Costa
import imgfotoarthur from '../img/artista/Arthur_Timótheo_da_Costa/Arthur_timotheo.webp'
import imgobra1arthur from '../img/artista/Arthur_Timótheo_da_Costa/1.webp'
import imgobra2arthur from '../img/artista/Arthur_Timótheo_da_Costa/2.webp'
//Benenito
import imgfotobenedito from '../img/artista/Benedito José Tobias/foto.webp'
import imgobra1benedito from '../img/artista/Benedito José Tobias/1.webp'
import imgobra2benedito from '../img/artista/Benedito José Tobias/2.webp'
//Bob marley
import imgfotobob from '../img/artista/Bob Marley/foto.webp'
import imgobra1bob from '../img/artista/Bob Marley/1.webp'
import imgobra2bob from '../img/artista/Bob Marley/2.webp'
//Bruno
import imgfotobruno from '../img/artista/Bruno Baptistelli/foto.webp'
import imgobra1bruno from '../img/artista/Bruno Baptistelli/1.webp'
import imgobra2bruno from '../img/artista/Bruno Baptistelli/2.webp'



//componentes
import ConteinerCards from './conteinercards.jsx'
import { useEffect, useRef, useState } from 'react'
//dados 
import dados from '../dados.json'



function Entrada(props) {
    function Explorar() {
        RefConteiner.current.classList.add('Sumir')
        setTimeout(() => {
            props.Set(<ConteinerCards voltar={Voltar} add={props.add} refe={props.refe}
                dados={{dadosinfo: dados, dadosimg : RefImagens.current}}
            ></ConteinerCards>)
    
        }, 1000)
    }

    function Voltar() {
        console.log('chamado')
        RefConteiner.current.classList.remove('Sumir')
        props.Set('')
    }

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
        let cont = 0
        for (let list of Object.entries(dados)) {
            cont ++
            for (let valor of list[1]) {
                if (String(valor.Nome).toLowerCase().includes(valordigitado)) {
                    listanome.push({ ValorExbir: valor.Nome, letra: list[0]})
                }
            }
            if (cont === 2) {break}
        }
        console.log(listanome)
        listanome = Ondenar(listanome, valordigitado, 'ValorExbir')
        
        if (InputRef.current.value.length === 0) {
            SetPesquisa([])
            RefCancelar.current.classList.remove('ComResultado')
            RefCancelar.current.classList.add('SemResultado')
            return
        }
        SetPesquisa(listanome)
        RefCancelar.current.classList.add('ComResultado')
        RefCancelar.current.classList.remove('SemResultado')
    }


    function DefaultPesquisa() {
        SetPesquisa([]) // zerando a lista de pesquisa
        InputRef.current.value = '' // tirando o valor do input
        InputRef.current.blur() // desfocando o input
        //removendo as class
        RefCancelar.current.classList.remove('ComResultado')
        RefCancelar.current.classList.add('SemResultado')   
    
    }


    //ref
    const RefConteiner = useRef()
    const InputRef = useRef()
    const RefCancelar = useRef()
    const RefImagens = useRef({})
    //state
    const [PesquisaResultado, SetPesquisa] = useState([])
    useEffect(() => {
        RefImagens.current =
        {
            A:
            //artista com A pae
            {
                artista1:
                {
                    foto: imgfotoabdias,
                    obras: [imgobra1obid, imgobra2obid]
                },
                artista2:
                {
                    foto: imgfotoarthur,
                    obras: [imgobra1arthur, imgobra2arthur]
                }
            },
            B: {
                artista1 : {
                    foto: imgfotobruno,
                    obras: [imgobra1bruno, imgobra2bruno]
                },
                artista2: {
                    foto: imgfotobenedito,
                    obras: [imgobra1benedito, imgobra2benedito]
                },
                artista3: {
                    foto: imgfotobob,
                    obras: [imgobra1bob, imgobra2bob]
                }
            }
        }
    })
    return (
        <div className="SubEnter" ref={RefConteiner}>
            <div className="Rodape">
                <div className="pesquisa">
                    <img src={imglupa} alt="lupa" onClick={() => InputRef.current.focus()}/>
                    <input type="text" placeholder='Pesquisa por artista' onChange={(e) => Pesquisa(e)} ref={InputRef} />
                    <img src={imgcancelar} alt='cancelar' className="SemResultado" ref={RefCancelar} onClick={DefaultPesquisa} />
                    <span className="resultados">
                        {
                            PesquisaResultado.map((valor, i) => (
                                <div
                                    key={i}
                                    onClick={
                                        () => {
                                            props.add(dados[valor.letra], RefImagens.current[valor.letra], valor.ValorExbir)
                                            DefaultPesquisa()
                                        }
                                    }>{valor.ValorExbir}</div>
                            ))
                        }
                    </span>
                </div>
                <p>Sobre Nós</p>    
            </div>
            <img src={imgnegros1370} alt="" />
            <div className="Conteiner Opshow" >
                <h1>Enciclopédia Negra</h1>
                <p>Um espaço para descobrir artistas negros de A a Z.
                    Histórias, obras e representatividade em um só lugar.</p>
                <button onClick={
                    Explorar
                }
                ><p>Explorar agora</p></button>
            </div>
            
        </div>
    )
}

export default Entrada