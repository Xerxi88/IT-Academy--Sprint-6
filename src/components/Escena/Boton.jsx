import React from 'react'
import { BotonBox } from "../../styled.js";
import '../../App.css';

const Boton = ({text, onClick}) => {

  return (
    <>
    <BotonBox><button onClick={onClick}>{text}</button></BotonBox>
    </>
  )
}

export default Boton