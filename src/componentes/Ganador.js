import React from 'react'

export const Ganador = ({ganoJuego}) => {
  return (
    <div>{
        ganoJuego 
        ? <p>{ganoJuego}</p>
        : <p>Es un empate 😕 !!!</p>
    }</div>
  )
}
