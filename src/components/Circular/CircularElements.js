import styled from "styled-components";

export const CircularContainer = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  flex-direction: column;
`;

export const CircularWrapper = styled.div`
  
`;

export const CircularH3 = styled.h2`
  padding: 20px;
  font-weight: 500;
  font-size: 2rem;
  color: #269880;
  text-align: center;
`;

export const CircularImg = styled.img`
  width: 650px;
  height: 650px;

  @media screen and (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;
