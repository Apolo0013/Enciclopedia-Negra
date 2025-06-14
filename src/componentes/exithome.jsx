import './exithome.scss'
import Homeimg from '../img/home.webp'
import { useNavigate } from 'react-router-dom'

function Exit() {
    const nv = useNavigate()
    return (
        <div className="voltarhome" onClick={() => nv('/home/')}>
            <img src={Homeimg} alt="" />
        </div>
    )
}

export default Exit