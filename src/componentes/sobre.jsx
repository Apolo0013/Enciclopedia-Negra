import './sobre.scss'
//imagens
//cabeça
import headimg from '../img/sobre/head.webp'
import sobreimg from '../img/sobre/sobre.webp.png'
import { useRef } from 'react'

function Sobre() {
    function Scroll(e) {
        e.scrollIntoView({
            behavior: "smooth",
            block: "start"
            })
    }

    const RefInicio = useRef()
    const RefSobreP = useRef()
    const RefCriacao = useRef()
    const RefpesA = useRef()
    const RefpesC = useRef()
    const Reforg = useRef()
    

    return (
        <div className="MainSobre">
            <nav className="Nav-Sobrenos">
                <span onClick={() => Scroll(RefInicio.current)}>Inicio</span>
                <span onClick={() => Scroll(RefSobreP.current)}>Sobre Projeto</span>
                <span onClick={() => Scroll(RefCriacao.current)}>Crianção do Site</span>
                <span onClick={() => Scroll(RefpesA.current)}>Pesquisa dos Artista</span>
                <span onClick={() => Scroll(RefpesC.current)}>Pesquisa dos Conceito</span>
                <span onClick={() => Scroll(Reforg.current)}>Organização da Exposição</span>
            </nav>
            <header id="Inicio" className="cabeçalho fonth1h2" ref={RefInicio}>
                <section>
                    <h1>NOSSA EQUIPE E PROJETO</h1>
                    <p>Conheça as mentes por trás da nossa plataforma e descubra como o Projeto de Eletiva impulsiona a inovação.</p>
                </section>
                <img src={headimg} alt="" />
            </header>
            <section id="Sobre-Projeto" className="sobre-projeto" ref={RefSobreP}>
                <div>
                    <span class="head-sobre">
                        <h1 className="fonth1h2">O PROJETO DE ELETIVA</h1>
                        <p>A disciplina eletiva articula-se à Formação Geral Básica do Ensino Médio Potiguar. É norteada por Eixos Estruturantes, que flexibilizam o currículo.</p>
                    </span>
                    <div className="Card-Sobre-Conteiner">
                        <span className="Card-Sobre">
                            <h3 className="fonth1h2">INVESTIGAÇÃO CIENTÍFICA</h3>
                            <h4>Exploração e análise de fenômenos.</h4>
                        </span>
                        <span className="Card-Sobre">
                            <h3 className="fonth1h2">PROCESSOS CRIATIVOS</h3>
                            <h4>Estimula a inovação e soluções originais.</h4>
                        </span>
                        <span className="Card-Sobre">
                            <h3 className="fonth1h2">MEDIAÇÃO E INTERVENÇÃO SOCIOCULTURAL</h3>
                            <h4>Promove a participação cidadã e impacto social.</h4>
                        </span>
                        <span className="Card-Sobre">
                            <h3 className="fonth1h2">EMPREENDEDORISMO</h3>
                            <h4>Desenvolve habilidades para criar e gerenciar.</h4>
                        </span>
                    </div>
                </div>
                <img src={sobreimg} alt="" />
            </section>
            <section id="Criacao" className="Dev" ref={RefCriacao}>
                <h1 className="fonth1h2">CRIACÃO DA PLATAFORMA</h1>
                <p>Nossa plataforma foi desenvolvida por uma equipe dedicada. Eles tranformaram a visão em realidade digital.</p>
                <span>
                    <ul>
                        <li>Apolônio</li>
                        <li>Aristófanes</li>
                        <li>Vinícius</li>
                    </ul>
                </span>
            </section>
            <section id="pesquisa-artista" className="Dev" ref={RefpesA}>
                <h1>PESQUISA DE ARTISTAS E OBRAS</h1>
                <p>Os seguintes alunos pesquisaram artistas e suas biografias. Eles também selecionaram duas obras de arte para a exposição.</p>
                <span>
                    <ul>
                        <li>Emile Vitória</li>
                        <li>Savyu Rayury</li>
                        <li>Clara</li>
                        <li>Kauanny</li>
                    </ul>
                    <ul>
                        <li>Vanessa</li>
                        <li>Walter Alves</li>
                        <li>Joenilly</li>
                    </ul>
                </span>
            </section>
            <section id="pesquisa-conceito" className="Dev" ref={RefpesC}>
                <h1>PESQUISA DO CONCEITO DAS OBRAS</h1>
                <p>Esta equipe foi responsável por aprofundar o significado das obras. Eles exploraram os conceitos por trás de cada criação artística.</p>
                <span>
                    <ul>
                        <li>Fagner</li>
                        <li>Jhonata</li>
                        <li>Ryan</li>
                        <li>Mayra</li>
                        <li>Richand</li>
                        <li>Camily</li>
                        <li>Guilherme</li>
                    </ul>
                </span>
            </section>
            <section id="org" className="Dev" ref={Reforg}>
                <h1>ORGANIZAÇÃO DA EXPOSIÇÃO</h1>
                <p>A equipe de exposição garantiu que as obras fossem apresentadas. Eles cuidaram da logística e montagem.</p>
                <span>
                    <ul>
                        <li>Lívia</li>
                        <li>Derick</li>
                        <li>Ane Gabriely</li>
                        <li>Brenno</li>
                        <li>Higor</li>
                        <li>Samuel</li>
                        <li>Jackson Felipe</li>
                    </ul>
                </span>
            </section>
        </div>
    )
}

export default Sobre