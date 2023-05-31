import React from 'react'
import TresXO from '../assets/kisspng-gibbeting-computer-icons-gallows-clip-art-5b1f4efa1835e7.8029924415287784900992.png'

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
