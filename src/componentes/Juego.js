import React, { useState } from 'react'
import { ganador } from '../helper/funciones'
import { Ganador } from './Ganador'

export const Juego = () => {

    const [arregloJuego, setArregloJuego] = useState(Array(9).fill(""))
    const [jugadorX, setJugadorX] = useState(true)
    const ganoJuego=ganador(arregloJuego)


    const handleGame=(i)=>{
        const copiaJuego=[...arregloJuego]

        if(ganoJuego || copiaJuego[i]) return

        copiaJuego[i]= jugadorX ? 'X' : 'O'

        setArregloJuego(copiaJuego)
        setJugadorX(!jugadorX)

    }

    const handleReset=()=>{
        setArregloJuego(Array(9).fill(""))
        setJugadorX(true)
    }

    return (
        <>
            <div className='juego'>
                <div className='cuadrado'>
                    <div className='celda'>
                        {arregloJuego.map((el,i)=>(
                            <div  key={i} value={el} onClick={()=>handleGame(i)} >{el}</div>
                        ))}
                    </div>
                </div>
                    
                {(!arregloJuego.includes("") || ganoJuego)? <Ganador ganoJuego={ganoJuego} /> :null}
            
                <button onClick={handleReset}>Volver a Jugar</button>
            </div>
        </>
    )
}
