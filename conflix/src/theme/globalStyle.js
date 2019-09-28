import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }
    body{
        @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
        margin: 0;
        font-family: 'Roboto Mono', monospace;
        overflow: auto;
        background: white;
        min-height: 90vh;
    }
`;

export default GlobalStyle