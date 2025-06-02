import './conteinerartista.css'
import imgfecha from '../../img/fechaimg.webp'
import CardArtista from './cardartista.jsx'

//artista imagens obras e artista.
import fds from '../../img/img1.jpg'
import fds2 from '../../img/D_Q_NP_717851-MLU50424885263_062022-O.webp'

function ConteinerArtista(props) {
    return (
        <div className="ConteinerArtista">
            <img src={imgfecha} onClick={props.fecha} alt="" />
            <div className="ConteinerCards">
                <CardArtista
                    nome='Abdias do Nascimento'
                    idade='(1914 - 2011)'
                    profissoes={['ativista', 'político', 'poeta', 'professor', 'dramaturgo']}
                    biografia='Abdias do Nascimento foi uma das figuras mais importantes na luta contra o racismo no Brasil. Fundador do Teatro Experimental do Negro, em 1944, ele atuou como militante pela valorização da cultura negra nas artes e na política. No período da ditadura militar, denunciou o racismo brasileiro em organismos internacionais como a ONU. Na política, foi deputado federal e senador, defendendo pautas como cotas raciais e a criação do Dia da Consciência Negra. Sua vida é símbolo de resistência e ativismo antirracista.'
                    textos_obras={['"O Quilombismo" – Obra teórica que propõe uma sociedade baseada nos valores dos quilombos, como solidariedade e resistência.', '"Sortilégio" – Peça teatral que denuncia o racismo e exalta a identidade negra']}
                    imgobras={[fds, fds2]}
                ></CardArtista>
            </div>
        </div>
    )  
}

export default ConteinerArtista