import React from "react";
import {Border} from '../../styled.js';

const Escena = ({title,style,onClick}) => {
  
  return (
    <>
      <Border style={style}>{title}</Border>
    </>
  );
};

Escena.defaultProps = {
  title: "Insert text here",
};

export default Escena;
