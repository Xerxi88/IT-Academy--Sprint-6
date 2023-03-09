import React from "react";
import {Border} from '../../styled.js';

const Escena = ({ title }) => {
  return (
    <>
      <Border>{title}</Border>
    </>
  );
};

Escena.defaultProps = {
  title: "Insert text here",
};

export default Escena;
