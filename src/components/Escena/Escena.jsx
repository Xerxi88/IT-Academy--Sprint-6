import React from "react";
import {Border} from '../../styled.js';

const Escena = ({ title, style, ref }) => {
  
  return (
    <>
      <Border style={style}><div ref={ref}>{title}</div></Border>
    </>
  );
};

Escena.defaultProps = {
  title: "Insert text here",
};

export default Escena;
