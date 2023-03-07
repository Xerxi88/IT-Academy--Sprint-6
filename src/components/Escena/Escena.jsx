import React from 'react'

const Escena = ({title}) => {
  return (
    <div>{title}</div>
  )
}

Escena.defaultProps = {
    title: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
  }
  
export default Escena