import './sobre.scss'
import Rodape from './rodape'
//imagens

//cabeça
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
            <Rodape classop_menu="TopPosition" rodape_outros={true}></Rodape>
            <div className="MainSobre">
                <nav className="Nav-Sobrenos">
                    <span onClick={() => Scroll(RefInicio.current)}>Nossa Equipe</span>
                    <span onClick={() => Scroll(RefSobreP.current)}>Sobre Projeto</span>
                    <span onClick={() => Scroll(RefCriacao.current)}>Crianção do Site</span>
                    <span onClick={() => Scroll(RefpesA.current)}>Pesquisa dos Artista</span>
                    <span onClick={() => Scroll(RefpesC.current)}>Pesquisa dos Conceito</span>
                    <span onClick={() => Scroll(Reforg.current)}>Organização da Exposição</span>
                </nav>
                <div className="conteudo-text">
                    <header id="Inicio" className="cabeçalho Dev fonth1h2" ref={RefInicio}>
                        <section>
                            <h1>NOSSA EQUIPE E PROJETO</h1>
                            <span>
                                <p>Conheça as mentes por trás da nossa plataforma e entenda como o <strong>Projeto Enciclopédia Negra</strong>, desenvolvido na disciplina de <strong>Eletiva</strong> com estudantes da <strong>2ª série do Ensino Médio</strong> da <strong>Escola Estadual Professora Ana Júlia de Carvalho Mousinho</strong>, promove a <strong>valorização da história e da cultura afro-brasileira</strong> por meio da <strong>educação</strong> e da <strong>representatividade</strong>.</p>

                                    <p>Sob a supervisão e orientação do <strong>professor de arte Victor Mota</strong>, o projeto integra um <strong>componente curricular optativo</strong> de caráter <strong>interdisciplinar</strong> e <strong>transdisciplinar</strong>, oferecido semestralmente como parte da <strong>formação integral</strong> dos alunos.</p>

                                    <p>De acordo com o <strong>Referencial Curricular do Ensino Médio Potiguar (2021)</strong>, “os <strong>Eixos Estruturantes</strong> transversalizam a problematização de situações vivenciadas no cotidiano local, regional e/ou global, que, por sua vez, inspiram temas e títulos de <strong>projetos pedagógicos</strong> a partir da abordagem suscitada.”</p>

                            </span>
                        </section>
                    </header>
                    <section id="Sobre-Projeto" className="Dev" ref={RefSobreP}>
                        <h1 className="fonth1h2">O PROJETO DE ELETIVA</h1>
                        <p>A <strong>disciplina eletiva</strong> faz parte dos <strong>itinerários formativos</strong> do <strong>Referencial Curricular do Ensino Médio Potiguar</strong>, conectando-se diretamente à <strong>Formação Geral Básica</strong>.</p>

                        <p>No nosso caso, essa disciplina está sendo desenvolvida por meio do <strong>Projeto Enciclopédia Negra</strong>, que valoriza a <strong>cultura afro-brasileira</strong> e contribui para uma <strong>educação mais justa, diversa e representativa</strong>.</p>

                        <p>O projeto é guiado pelos <strong>Eixos Estruturantes</strong>, que desempenham um papel essencial na <strong>flexibilização do currículo</strong>. São eles: (apresentar em seguida a tabela que já se encontra no site)</p>
                        <div className="Card-Sobre-Conteiner">
                            <div className="Card-Sobre">
                                <h3 className="fonth1h2">INVESTIGAÇÃO CIENTÍFICA</h3>
                                <h4>Exploração e análise de fenômenos.</h4>
                            </div>
                            <div className="Card-Sobre">
                                <h3 className="fonth1h2">PROCESSOS CRIATIVOS</h3>
                                <h4>Estimula a inovação e soluções originais.</h4>
                            </div>
                            <div className="Card-Sobre">
                                <h3 className="fonth1h2">MEDIAÇÃO E INTERVENÇÃO SOCIOCULTURAL</h3>
                                <h4>Promove a participação cidadã e impacto social.</h4>
                            </div>
                            <div className="Card-Sobre">
                                <h3 className="fonth1h2">EMPREENDEDORISMO</h3>
                                <h4>Desenvolve habilidades para criar e gerenciar.</h4>
                            </div>
                        </div>
                    </section>
                    <section id="Criacao" className="Dev" ref={RefCriacao}>
                        <h1 className="fonth1h2">CRIACÃO DA PLATAFORMA</h1>
                        <p><strong>Nossa plataforma</strong> foi desenvolvida por uma <strong>equipe dedicada e criativa</strong>. Eles transformaram a ideia da <strong>Enciclopédia Negra</strong> em uma <strong>experiência digital acessível e inovadora</strong>.</p>
                        <span>
                            <ul>
                                <li>👨‍💻 Apolônio Guilherme Lima da Silva  – Back-End e funcionalidades</li>
                                <li>🎨 Aristófanes Lázaro da Silva Romao – Design e experiência do usuário</li>
                                <li>🧠 Vinícius Gabriel Gonzaga Gomes – Conteúdo e pesquisa histórica</li>
                            </ul>
                        </span>
                    </section>
                    <section id="pesquisa-artista" className="Dev" ref={RefpesA}>
                        <h1>PESQUISA DE ARTISTAS E OBRAS</h1>
                        <p>Durante o desenvolvimento da <strong>Enciclopédia Negra</strong>, os <strong>alunos listados abaixo</strong> pesquisaram <strong>artistas</strong> e elaboraram <strong>biografias detalhadas</strong>. Cada um também selecionou <strong>duas obras de arte</strong> para compor a <strong>exposição final do projeto</strong>.</p>
                        <span>
                            <ul>
                                <li>Emylle Victória dos Santos Cruz Silva</li>
                                <li>Savyu Rayury Tionacio</li>
                                <li>Ana Clara dos Santos</li>
                                <li>Kauany Mayara Amaro Pereira</li>
                            </ul>
                            <ul>
                                <li>Vanessa dos Santos Gomes</li>
                                <li>Walter Alves de Araújo</li>
                                <li>Joenilly Esther Soares da Silva</li>
                            </ul>
                        </span>
                    </section>
                    <section id="pesquisa-conceito" className="Dev" ref={RefpesC}>
                        <h1>PESQUISA DO CONCEITO DAS OBRAS</h1>
                        <p>A <strong>equipe foi braba</strong> e garantiu que as <strong>obras fossem vistas como devem</strong>: com <strong>presença</strong>, <strong>estrutura</strong> e <strong>impacto</strong>. Responsáveis pela <strong>logística</strong>, <strong>montagem</strong> e <strong>organização geral do espaço</strong>.</p>
                        <h2>🧠 Pesquisadores do conceito</h2>
                        <span>
                            <ul>
                                <li>Fagner</li>
                                <li>Jhonata</li>
                                <li>Ryan</li>
                                <li>Mayra</li>
                            </ul>
                            <ul>
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
                            </ul>
                            <ul>
                                <li>Higor</li>
                                <li>Samuel</li>
                                <li>Jackson Felipe</li>
                            </ul>
                        </span>
                    </section>
                    <section className="SuperVisao Dev">
                        <h1>SUPERVISÃO E ORIENTAÇÃO</h1>
                        <div className="supervisao-info-professor">
                            <h2>Victor Oliveira da Mota</h2>
                            <p>Professor de Arte da Escola Estadual Professora Ana Júlia de Carvalho Mousinho Mestre em Ensino de Arte e Especialista em Práticas Assertivas</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Sobre