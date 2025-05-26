import './cardartista.css'
import ImgEx from '../../img/ex.jpg'

function CardArtista() {
    return (
        < div className="CardArtista">
            <div className="infoArtista">
                <img src={ImgEx} alt="" />
                <span>
                    <div>
                        <h2>Idade:</h2>
                        <h3>30</h3>
                    </div>
                    <div>
                        <h2>Profissão</h2>
                        <ul>
                            <li>Composito</li>
                            <li>Artista</li>
                            <li>Canto</li>
                        </ul>
                    </div>
                </span>
            </div>
            <div className="bio">
                <h2>Apolonio Guilherme Lima da Silva</h2>
                <div>    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, architecto dolores eos, atque quaerat eum magni necessitatibus voluptatibus dolore dolorem, voluptate ad optio vel quidem dolorum ipsum delectus minima repellat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, excepturi in! Fugiat, iste culpa sit rerum dolore harum excepturi tempore quaerat sunt ut maxime totam dolores provident velit illum quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolores possimus minima tempora alias nisi velit dolorum officia explicabo ex ad similique officiis quo ipsa perspiciatis laboriosam repellat ullam quibusdam!</p>
                </div>
            </div>
        </div >
    )
}

export default CardArtista