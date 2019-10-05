import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }
    body{
        margin: 0;
        font-family: 'Roboto', monospace;
        // font-family: 'Assistant', sans-serif;
        overflow: auto;
        // background: white;
        min-height: 90vh;
    }
`;

export default GlobalStyle