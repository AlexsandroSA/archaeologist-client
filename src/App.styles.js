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
    }

    body {
        box-sizing: border-box;
        background: #E4A367;
        border-top: 5px solid #fff;
        color: #fff;
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
`;

export default GlobalStyle;
