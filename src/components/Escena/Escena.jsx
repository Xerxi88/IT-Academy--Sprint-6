import React from 'react'

const Escena = ({title}) => {
  return (
    <>
      <div>{title.frase1}</div>
      <div>{title.frase2}</div>
      <div>{title.frase3}</div>
      <div>{title.frase4}</div>
    </>
  )
}

Escena.defaultProps = {
    title: "Insert text here",
  }
  
export default Escena