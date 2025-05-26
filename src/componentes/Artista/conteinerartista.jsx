import './conteinerartista.css'
import imgfecha from '../../img/fechaimg.webp'
import CardArtista from './cardartista.jsx'

function ConteinerArtista(props) {
    return (
        <div className="ConteinerArtista">
            <img src={imgfecha} onClick={props.fecha} alt="" />
            <div className="ConteinerCards">
                <CardArtista></CardArtista>
                <CardArtista></CardArtista>
                <CardArtista></CardArtista>
                <CardArtista></CardArtista>
                <CardArtista></CardArtista>
                <CardArtista></CardArtista>
            </div>
        </div>
    )  
}

export default ConteinerArtista