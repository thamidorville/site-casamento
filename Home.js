import React from "react";
import styled from "styled-components";
import logo from '../Rectangle 5.png';
import { useNavigate } from "react-router-dom";
import flores from '../flores.png'
import Countdown from "react-countdown";


const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  /* background-color: #f8f8f8; */
  font-family: 'Dancing Script', cursive;
`;

const PageContainer = styled.div`
  text-align: center;
  padding: 2rem;
  background: linear-gradient(270deg, #F6E6F6 0.07%, #FEF4C1 57.63%, rgba(246, 230, 246, 0.00) 101.45%);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
`;

const Details = styled.div`
  text-align: center;
  font-family: 'Dancing Script', cursive;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Home = () => {
    const navigate = useNavigate()
    const targetDate = new Date("2024-07-10")

    const handleGoToDetails = () => {
        navigate("/details")
    }
    return (
        <PageContainer>
            <Nav>

                <img src={flores} />
                <h1>Guilherme & Taisa</h1>
                <img src={flores} />

            </Nav>
            
            <LogoContainer>

                <Logo src={logo} />
            </LogoContainer>
            <Details onClick={handleGoToDetails}>Ir para Página de Detalhes</Details>
            <CountdownContainer>
        <Countdown date={targetDate} daysInMonthsInHours={true}/>
      </CountdownContainer>
        </PageContainer>
    )
}