import './cardartista.css'
import ImgEx from '../../img/ex.jpg'
import { useEffect } from 'react'

function CardArtista(props) {
    useEffect(() => {
        console.log(props.profissoes)
    })
    return (
        < div className="CardArtista">
            <div className="infoArtista">
                <img src={ImgEx} alt="" />
                <span>
                    <div>
                        <h2>Idade</h2>
                        
                        <h3>{
                            //string
                            props.idade
                        }</h3>
                    </div>
                    <div>
                        <h2>Profissão</h2>
                        <ul>
                            {
                                //lista
                                props.profissoes.map((valor, i) => (
                                    <li key={i}>{valor}</li>
                                ))
                            }
                        </ul>
                    </div>
                </span>
            </div>
            <div className="bio">
                <div>    
                    <h2>{props.nome}</h2>
                    <section className="biografia">
                        <p>{props.biografia}</p>
                    </section>
                    <section className="obras">
                        <section>
                            <p>{props.textos_obras[0]}</p>
                            <div><img src={props.imgobras[0]} alt="img" /></div>
                        </section>
                        <section>
                            <p>{props.textos_obras[1]}</p>
                            <div><img src={props.imgobras[1]} alt="img" /></div>
                        </section>
                    </section>
                </div>
            </div>
        </div >
    )
}

export default CardArtista