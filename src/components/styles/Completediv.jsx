import { styled, createGlobalStyle } from 'styled-components';

export const Completediv = styled.div`
  width: 100vw;
  max-height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    overflow:hidden;
  }
  * {
        font-family: "Karla", sans-serif, "Ubuntu Mono", monospace;
        font-weight: 400;
        font-style: normal;
        box-sizing: border-box;
  }
`;
