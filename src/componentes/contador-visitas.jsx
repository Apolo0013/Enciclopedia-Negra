import './contador-visitas.scss'
//imagem
import Userimg from '../img/visitas/user.svg'
import { useEffect, useRef, useState } from 'react'

// um compoentes simple de load
function Load_Simple() {
    return <div className="load"></div>
}


function Contador_Visitas() {
    async function AddNumero() {
        try {
            const resquest = await fetch('https://backend-enclopedia-negra-cont-visit.onrender.com/addvisita', {
                method: 'GET',
                credentials: "include"
            })
            const resposta = await resquest.json()
            console.log(resposta)
        }
        catch (error) {
            console.log(error)
        }
    }

    async function PegarTotalDeVisitante() {
        try {
            //http://127.0.0.1:5000
            //https://backend-enclopedia-negra-cont-visit.onrender.com
            const resquest = await fetch('https://backend-enclopedia-negra-cont-visit.onrender.com/getnumerovisitante', {
                method: 'GET',
                credentials: 'include'
            })
            const resposta = await resquest.json()
            console.log(resposta)
            if (resposta.sucesso) {
                SetContaVisita(<p>{resposta.numero_visitantes}</p>)
            }
            else {
                return false
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    //state para controlar ondem exbir o quanto teve de visitando ao site pae.
    const [StateContaVisita, SetContaVisita] = useState()
    //ref para o useeffect rodar apenas uma vez.
    const RefOnceUseEffect = useRef(false)

    useEffect(() => {
        if (RefOnceUseEffect.current) { return }
        RefOnceUseEffect.current = true
        //Controlando o State ondem vai fica o load o tanto de visitas.
        SetContaVisita(<Load_Simple/>)
        //add +1 visitante
        AddNumero()
        //Pegando o numero de visitante
        PegarTotalDeVisitante()
        const loop = setInterval( async () => {
            PegarTotalDeVisitante()
        }, 34000)
        return () => clearInterval(loop)
    }, [])

    return (
        <div className="conteiner-contador-visitas">
            <h4>Total de visitas</h4>
            <span className='visistantes'>
                <img src={Userimg} alt="" />
                {StateContaVisita}
            </span>
        </div>
    )
}

export default Contador_Visitas