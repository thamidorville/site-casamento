import React from "react";
import styled from "styled-components";
import flores from '../flores.png';
import { useNavigate } from "react-router-dom";
import fundo from '../Rectangle 19.png';

const Container = styled.div`
  text-align: center;
  padding: 2rem;
  background: linear-gradient(270deg, #F6E6F6 0.07%, #FEF4C1 57.63%, rgba(246, 230, 246, 0.00) 101.45%);
`;

const Description = styled.p`
  display: flex;
  flex-direction: column;
  font-family: 'Dancing Script', cursive;
  background: #FEDFE3;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);
  max-width: 100%;
  justify-content: center;
  text-align: center;
  align-content: justify;
  padding: 3rem;
  border: 7px solid #BB9096;
  font-size: 26px;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 2rem;
  }
`;

const Titulo = styled.p`
  display: flex;
  max-width: 120%;
  flex-direction: column;
  align-items: center;
  font-family: 'Dancing Script', cursive;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-family: 'Dancing Script', cursive;
`;

const Home = styled.div`
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  display: flex;
  padding: 2rem;
`;

const Details = styled.div`
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  display: flex;
  padding: 2rem;
`;
const ImagemFundo = styled.div`
  background-image: url(${fundo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 50vh; 

  @media (max-width: 768px) {
    height: 30vh; 
    min-width:30vw;
  
  }
`;

export const ConfirmPresence = () => {

  const navigate = useNavigate();


  const handleGoToHome = () => {
    navigate("/");
  };

  const handleGoToDetails = () => {
    navigate("/details");
  };

  return (
    <Container>
      <Nav>
        <img src={flores} alt="flores" />
        <Home onClick={handleGoToHome}>Ir para Página Inicial</Home>
        <Details onClick={handleGoToDetails}>Ir para Página de Detalhes</Details>
        <img src={flores} alt="flores" />
      </Nav>
      <Description>
        Queridos amigos e familiares, é com grande alegria que convidamos vocês
        para celebrar conosco o nosso casamento. Será um momento especial e queremos
        compartilhá-lo com as pessoas que amamos. Sua presença é muito importante
        para nós e ficaremos honrados se puderem fazer parte desse momento único
        em nossas vidas.
        Queremos muito celebrar este momento especial ao seu lado! Por favor, ajude-nos a torná-lo inesquecível, confirmando sua presença. Envie gentilmente o seu nome completo, juntamente com o nome do seu acompanhante, para o nosso e-mail cerimonial. Mal podemos esperar para compartilhar esse dia incrível com você!
      </Description>
      <Titulo>
        <br></br>
        Por favor, confirme a sua presença enviando um e-mail para nós em: cerimonial@email.com. Será um prazer contar com você neste dia especial!
      </Titulo>
      <ImagemFundo>
        <img src={fundo}/>
      </ImagemFundo>
      
    </Container>
  );
};

