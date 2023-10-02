import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { Router } from './router/Router';

const Fundo = styled.div`
width: 100%;
min-height: 100vh;
`;

function App() {
  return (
    <Fundo>
      <GlobalStyle />
      <Router />
    </Fundo>
  );
}

export default App;
