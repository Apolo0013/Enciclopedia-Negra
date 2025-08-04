import './rodape-bottom.scss'
//imagens
import githubimg from '../img/footer-bottom/github.svg'
import linkdinimg from '../img/footer-bottom/linkdin.svg'
import emailimg from '../img/footer-bottom/email.svg'
import phoneimg from '../img/footer-bottom/phone.svg'

function rodape_bottom() {
    return (
        <footer class="rodape-bottom">
            <div class="wraper-conteiner-info">
                <div class="conteiner-info">
                    <h3>Desenvolvido por</h3>
                    <h4>Apolonio Guilherme Lima da Silva</h4>
                    <ul>
                        <li>
                            <a href="#" target="_blank">
                                <img src={githubimg} alt="logo do github" />
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src={linkdinimg}  alt="Logo do Linkdin" />
                                Linkdin
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="rodape-bottom-diviso"></div>
                <div class="conteiner-info">
                    <h3>Contato da Escola</h3>
                    <ul>
                        <li>
                            <span>
                                <img src={emailimg} alt="Imagem Email" />
                                <h4>Email</h4>
                            </span>
                            <p>contato@escola.com.br</p>
                        </li>
                        <li>
                            <span>
                                <img src={phoneimg} alt="Imegem telofone" />
                                <h4>Telefone</h4>
                            </span>
                            <p>(11) 1234-5678</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="Direitos-Reservados">
                <p>© 2025 - Todos os direitos reservados</p>
            </div>
        </footer>
    )
}

export default rodape_bottom