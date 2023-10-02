import React, { useState } from "react";
import styled from "styled-components";
import flores from '../flores.png';
import { useNavigate } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  /* background-color: #f8f8f8; */
  font-family: 'Dancing Script', cursive;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
`;

const SaveTheDate = styled.div`
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  display: flex;
  padding: 2rem;
  max-width: 100%;
  
  @media (max-width: 768px) {
    font-size: 20px; 
    padding: 1rem; 
  }
`;
const Confirm = styled.div`
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  display: flex;
  padding: 2rem;

`
const Home = styled.div`
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  display: flex;
  padding: 2rem;
  
`
const Historia = styled.div`
display: flex;
flex-direction:column;
align-items: center;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  `;

const DateAndLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Dancing Script', cursive;
  background: #FEDFE3;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);
  max-width: 100%;
  margin: 5% auto;
  justify-content: center;
  text-align: center;
  align-content: justify;
  padding: -10rem;
  border: 7px solid #BB9096;
  font-size: 24px;
  

  @media (min-width: 768px) {
    margin: 5% 10%;
  }

  @media (min-width: 1200px) {
    margin: 5% 20%;
  }
`;


const PageContainer = styled.div`
  text-align: center;
  padding: 2rem;
  background: linear-gradient(270deg, #F6E6F6 0.07%, #FEF4C1 57.63%, rgba(246, 230, 246, 0.00) 101.45%);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const WelcomePage = () => {
  const [showDateAndLocation, setShowDateAndLocation] = useState(false);
  const navigate = useNavigate()

  const handleClickSaveTheDate = () => {
    setShowDateAndLocation(!showDateAndLocation);
  };

  const handleGoToHistoria = () => {
    navigate("/historia")
  }

  const handleGoToHome = () => {
    navigate("/")
  }
  const handleGoToConfirm = () => {
    navigate("/confirm")
  }

  return (
    <PageContainer>

      <Nav>
        <img src={flores} />
        <Home onClick={handleGoToHome}>Página Inicial</Home>
        <SaveTheDate onClick={handleClickSaveTheDate}>Detalhes</SaveTheDate>
        <Historia onClick={handleGoToHistoria}>Nossa História</Historia>
        <Confirm onClick={handleGoToConfirm}>Confirmar Presença</Confirm>

        <img src={flores} />
      </Nav>
      {showDateAndLocation && (
        <DateAndLocation>
          <h2>Data da Celebração:</h2>
          <p>10 de Julho de 2024</p>
          <h2>Local:</h2>
          <p>Candelária</p>
          <h2>Horário:</h2>
          <p>15h</p>
        </DateAndLocation>)}
      
    </PageContainer>
  );
};
