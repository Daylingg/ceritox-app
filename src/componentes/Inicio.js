import React from 'react'
import TresXO from '../assets/tic-tac-toe.png'

export const Inicio = ({setInicio}) => {

    const handleInicio=()=>{
        setInicio(false)
    }

  return (
    <>
      <div className='inicio juego'>
        <h2>Tres en Raya</h2>
        <img src={TresXO} alt="cero-x"/>
        <button className='btn-inicio' onClick={handleInicio}>Iniciar Juego</button>
      </div>
        
    </>
  )
}
