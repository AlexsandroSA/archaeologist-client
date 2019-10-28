import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body,
    #app {
        display: flex;
        flex: 1;
        width: 100%;
        height: 100%;
        width: 100vw;
        height: 100vh;
        font-family: 'Lato', Arial, Helvetica, sans-serif;
        font-size: 16px;
    }
`;

export default GlobalStyle;
