import React from 'react';
import styled from 'styled-components';
import lindos from '../lindos.png';
import flores from '../flores.png';
import { useNavigate } from 'react-router-dom';


const HistoriaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Dancing Script', cursive;
  max-width: 100%;
  /* margin: 5% auto; */
  justify-content: center;
  text-align: center;
  font-size: 24px;
  padding: 2rem;
  
  @media (max-width: 768px) {
    font-size: 16px;
    
  }

`;

const FotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  max-width: 100%;
  max-height: auto;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const Nav = styled.nav`
display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-family: 'Dancing Script', cursive;
  background: linear-gradient(270deg, #F6E6F6 0.07%, #FEF4C1 57.63%, rgba(246, 230, 246, 0.00) 101.45%);
`

const Home = styled.div`
  text-align: center;
  font-family: 'Dancing Script', cursive;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Detalhes = styled.div`
text-align: center;
  font-family: 'Dancing Script', cursive;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Historia = () => {
    const navigate = useNavigate()

    const handleGoToHome = () => {
        navigate("/")
    };

    const handleGoToDetails = () => {
        navigate("/details")
    }

    return (

        <HistoriaContainer>
            <Nav>
                <img src={flores} />
                <Home onClick={handleGoToHome}>Ir para Página Inicial </Home>
                <img src={flores} />
                <Detalhes onClick={handleGoToDetails}>Voltar para Página de Detalhes</Detalhes>
                <img src={flores} />

            </Nav>
            <FotoContainer>
                <img src={lindos} alt="Taisa e Guilherme" />
            </FotoContainer>
            <h1>Amor à Primeira Conexão: A Jornada de Guilherme e Taisa</h1>
            Esta história é um verdadeiro conto moderno de amor.
            Eles se conheceram através da internet, em um encontro virtual que possibilitou
            que suas vidas se cruzassem. Ambos compartilhavam interesses semelhantes e logo
            perceberam que tinham uma conexão especial. Enquanto Guilherme era dono de dois adoráveis cachorros, Taisa também tinha um
            companheiro de quatro patas.
            A paixão pelos animais foi um dos pontos em comum que fortaleceu o relacionamento
            entre eles.
            Embora tenham se separado por um período, o destino conspirou a favor do amor.
            Em algum momento, eles se reencontraram e perceberam que ainda existia um sentimento profundo entre eles.
            Foi nesse momento que Guilherme tomou a decisão de que queria ficar com Taisa e que eles deveriam construir
            uma vida juntos. Desde então, eles decidiram embarcar em uma jornada de amor e companheirismo. Agora, estão ansiosos para
            celebrar o casamento e dar o próximo passo em sua história compartilhada, criando uma nova vida juntos.
            A história de Taisa e Guilherme é um lembrete de que o amor pode superar obstáculos e ressurgir ainda mais
            forte. É uma prova de que, quando duas pessoas se encontram e decidem se comprometer, a magia do
            relacionamento pode transformar suas vidas de maneiras inimagináveis.

        </HistoriaContainer>
    )

}

export default Historia;
