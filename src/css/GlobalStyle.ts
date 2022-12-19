import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { stylesheet } from "./typography/font/stylesheet";

export const GlobalStyle = createGlobalStyle`
    ${reset};
    ${stylesheet};

    body {
    	color: #fff;
        background-color: #041C31;
        font-family: 'Sharp Grotesk DB Cyr', sans-serif;
        letter-spacing: -0.02em;
        line-height: 1.5;
    }

    .wrapper {
        position: relative;
    	overflow:hidden;
    }

    .hidden {
        display:none;
    }
`;
