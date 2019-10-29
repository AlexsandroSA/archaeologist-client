import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        height: 100%;
        font-family: 'Lato', Arial, Helvetica, sans-serif;
        font-size: 16px;
        font-weight: 300;
        line-height: 1.45;
        color: #0F1108;
        font-size: 18px;
    }

    body {
        box-sizing: border-box;
        background: #F2E9DE;
    }

    #app {
        display: flex;
        flex: 1;
        flex-direction: column;
        width: 100%;
        height: 100%;
        width: 100vw;
        height: 100vh;
    }

    h1 {
        font-size: 2.2rem;
        margin: 0;
        font-weight: 600;
        line-height: 1.15;
    }

    h2 {
        font-size: 1.4rem;
        margin: 0.5rem 0;
        line-height: 1.15;
        font-weight: 200;
    }
`;

export default GlobalStyle;
