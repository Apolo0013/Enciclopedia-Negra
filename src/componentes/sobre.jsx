import './sobre.scss'
import Rodape from './rodape'
//imagens
//cabeça
import headimg from '../img/sobre/head.webp'
import sobreimg from '../img/sobre/sobre.webp.png'
import devimg from '../img/sobre/dev.webp'
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
        <div className="wraperMainSobre">
            <Rodape></Rodape>
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
                        <p>Conheça as mentes por trás da nossa plataforma e descubra como o Projeto da Enciclopédia Negra, desenvolvido na disciplina de Eletiva, valoriza a história e a cultura afro-brasileira através da educação e da representatividade.</p>
                    </section>
                    <img src={headimg} alt="" />
                </header>
                <section id="Sobre-Projeto" className="sobre-projeto" ref={RefSobreP}>
                    <div>
                        <span class="head-sobre">
                            <h1 className="fonth1h2">O PROJETO DE ELETIVA</h1>
                            <p>A disciplina eletiva se conecta à Formação Geral Básica do Ensino Médio Potiguar. Em nosso caso, está sendo aplicada através do projeto <strong>Enciclopédia Negra</strong>, que valoriza a cultura afro-brasileira e contribui para uma educação mais justa e representativa.</p>
                        </span>
                        <div className="Card-Sobre-Conteiner">
                            <span className="Card-Sobre">
                                <h3 className="fonth1h2">INVESTIGAÇÃO CIENTÍFICA</h3>
                                <h4>Estudo e análise da contribuição de personalidades negras na história e na sociedade.</h4>
                            </span>
                            <span className="Card-Sobre">
                                <h3 className="fonth1h2">PROCESSOS CRIATIVOS</h3>
                                <h4>Criação de conteúdos autorais que expressem a cultura, arte e identidade afro-brasileira.</h4>
                            </span>
                            <span className="Card-Sobre">
                                <h3 className="fonth1h2">MEDIAÇÃO E INTERVENÇÃO SOCIOCULTURAL</h3>
                                <h4>Ações que promovem o combate ao racismo e incentivam a valorização da diversidade.</h4>
                            </span>
                            <span className="Card-Sobre">
                                <h3 className="fonth1h2">EMPREENDEDORISMO</h3>
                                <h4>Desenvolvimento de ideias e projetos que fortaleçam a representatividade negra na educação e na comunidade</h4>
                            </span>
                        </div>
                    </div>
                    <img src={sobreimg} alt="" />
                </section>
                <section id="Criacao" className="Dev" ref={RefCriacao}>
                    <h1 className="fonth1h2">CRIACÃO DA PLATAFORMA</h1>
                    <p>Nossa plataforma foi desenvolvida por uma equipe dedicada e criativa. Eles transformaram a ideia da Enciclopédia Negra em uma experiência digital acessível e inovadora.</p>
                    <span>
                        <ul>
                            <li>👨‍💻 Apolônio – Back-End e funcionalidades</li>
                            <li>🎨 Aristófanes – Design e experiência do usuário</li>
                            <li>🧠 Vinícius – Conteúdo e pesquisa histórica</li>
                        </ul>
                    </span>
                    <div><img src={devimg} alt="" /></div>
                </section>
                <section id="pesquisa-artista" className="Dev" ref={RefpesA}>
                    <h1>PESQUISA DE ARTISTAS E OBRAS</h1>
                    <p>Durante o desenvolvimento da Enciclopédia Negra, os alunos listados abaixo pesquisaram artistas e elaboraram biografias detalhadas. Cada um também selecionou duas obras de arte para compor a exposição final do projeto.</p>
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
                    <p>Essa equipe foi responsável por investigar e interpretar os significados por trás das obras selecionadas.
                        Eles mergulharam nos <strong>valores culturais, sociais e simbólicos</strong> presentes em cada criação artística.</p>
                    <h2>🧠 Pesquisadores do conceito</h2>
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
                    <p> equipe foi braba e garantiu que as obras fossem vistas como devem: com presença, estrutura e impacto.
            Responsáveis pela <strong>logística, montagem e organização</strong> geral do espaço.</p>
                    <h2>👷🏽‍♂️ Time da missão</h2>
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
        </div>
    )
}

export default Sobre