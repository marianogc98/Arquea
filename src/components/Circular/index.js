import React from "react";
import {
  CircularContainer,
  CircularWrapper,
  CircularH3,
  CircularImg,
} from "./CircularElements";
import circular from "../../images/Circular.png";


const Circular = () => {
  return (
    <CircularContainer>
      <CircularH3>Economía Circular</CircularH3>
      <CircularWrapper>
        <CircularImg src={circular} />
      </CircularWrapper>
    </CircularContainer>
  );
};

export default Circular;
