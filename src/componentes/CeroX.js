import React, { useState } from 'react'
import { Inicio } from './Inicio'
import '../style.css'
import { Juego } from './Juego'

export const CeroX = () => {

    const [inicio, setInicio] = useState(true)
    


  return (
   <>
   <div className='contenedor'>
      {
          inicio ? <Inicio setInicio={setInicio}/>
          :<Juego/>
      }
   </div>
    
   </>
  )
}
