import './rodape-bottom.scss'
//imagens
import githubimg from '../img/footer-bottom/github.svg'
import linkdinimg from '../img/footer-bottom/linkdin.svg'
import emailimg from '../img/footer-bottom/email.svg'
import phoneimg from '../img/footer-bottom/phone.svg'

function rodape_bottom() {
    function CopyText(e) {
        console.log('chamado')
        const el = e.target
        //aqui ele vai verificar se o a class click ja esta nao ou nao pae.
        const classadd = [...el.classList].includes('click-copy')
        if (el && !classadd) {
            //copiando
            navigator.clipboard.writeText(el.textContent)
            // add class com keyframe da animcao
            el.classList.add('click-copy')
            //1.5s para tirar a class
            setTimeout(() => el.classList.remove('click-copy'), 1500)
        }
    }

    return (
        <footer className="rodape-bottom">
            <div className="wraper-conteiner-info">
                <div className="conteiner-info">
                    <h3>ENCICLOPEDIA NEGRA</h3>
                    <div className="conteiner-subinfo">
                        <span>
                            <p>Plataforma desenvolvida na disciplina eletiva da Escola Estadual Profª Ana Júlia de Carvalho Mousinho (Localizada no Parque dos Coqueiros, Zona Norte de Natal – RN) por:
                            </p>
                            <p>
                                <strong>Apolônio Guilherme Lima da Silva</strong> (Dev-Web)
                            </p>
                        </span>
                        <span>
                            <img src={linkdinimg} alt="" />
                            <img src={githubimg} alt="" />
                        </span>
                    </div>
                </div>
                <div className="rodape-bottom-diviso"></div>
                <div className="conteiner-info">
                    <h3>CONTATO</h3>
                    <span className='conteiner-subinfo'>
                        <span>    
                            <img src={emailimg} alt="" />
                            <div>
                                <p>Escola Estadual Profª Ana Júlia de Carvalho Mousinho
                                    </p>
                                <p><strong>Victor Mota</strong> – Supervisor e Orientador: <strong className='infocopy-footerbottom'
                                    onClick={(e) => CopyText(e)}>victormmota@hotmail.com</strong></p>
                            </div>
                        </span>
                        <span>
                            <img src={phoneimg} alt="" />
                            <p><strong
                                className='infocopy-footerbottom'
                                onClick={(e) => CopyText(e)}
                            >(84) 3232 – 6973</strong></p>
                        </span>
                    </span>
                </div>
            </div>
            <div class="Direitos-Reservados">
                <p>© 2025 - Todos os direitos reservados</p>
            </div>
        </footer>
    )
}
 
export default rodape_bottom