import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }
    body{
        @import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');
        max-width: 950px;
        margin: 0 auto;
        padding: 10px;
        font-family: monospace;
        overflow: auto;
        background: whitesmoke;
        // background: #313137;
        min-height: 90vh;
    }
`;

export default GlobalStyle