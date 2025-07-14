import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react'
import './menu.css'

const Menu = forwardRef(({tenta, final, EndGame, TempoExbir},ref) => {
    function TempoFormat(s) {
        //paremtros
        //- s : receber numero inteiros, representa segundos 

        let Min = Math.floor(s / 60)
        let Seg = s % 60

        if (Min > 9 && Seg > 9) {
            setTempo(`${Min}:${Seg}`)
        }
        else if (Min <= 9 && Seg <= 9) {
            setTempo(`0${Min}:0${Seg}`)
        }
        else if (Min > 9 && Seg <= 9) {
            setTempo(`${Min}:0${Seg}`)
        }
        else if (Min <= 9 && Seg > 9) {
            setTempo(`0${Min}:${Seg}`)
        }
    }

    function Tempoloop(tempo) {
        let s = Number(tempo) - 1
        loop.current = setInterval(() => {
            //endgame vem de fora, do pai, entao ele tambem é manipulador por la
            if (EndGame.current) {
                clearInterval(loop.current)
                TempoFormat(Number(TempoExbir))
                return
            }
            console.log('loop')
            TempoFormat(s) 
            s--
            if (s === -1) {
                EndGame.current = true
                final('O tempo Acarbou')
                setTempo('2:00')
                clearInterval(loop)
                return
            }
        }, 1000)
    }

    const [tempostate, setTempo] = useState()
    //variavel  do loop
    const loop = useRef()

    useImperativeHandle(ref, () => ({
        Loop: Tempoloop,
        TimeShow: () => TempoFormat(Number(TempoExbir))
    }))
    useEffect(() => {
        TempoFormat(Number(TempoExbir))
        return () => clearInterval(loop.current)
    }, [])
    
    return (
        <div className="Menu-Info">
            <h3>⏱️ Tempo: {tempostate}</h3>
            <h3>🎯 Tentativas: {tenta}</h3>
        </div>
    )  
})

export default Menu