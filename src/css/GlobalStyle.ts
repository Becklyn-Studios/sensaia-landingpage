import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { stylesheet } from "./typography/font/stylesheet";

export const GlobalStyle = createGlobalStyle`
    ${reset};
    ${stylesheet};

    html {
        // max-width: 100vw;
    }

    body {
    	color: #fff;
        background-color: #041C31;
        font-family: 'Sharp Grotesk DB Cyr', sans-serif;
        letter-spacing: -0.02em;
        line-height: 1.5;
    	overflow-x: hidden;
    }

    .wrapper {
        position: relative;
        height: 100%;
        max-width: 100vw;
        // overflow: hidden;
        // width: 100vw;
        // overflow-y: auto;
    }

    .hidden {
        display:none;
    }

    section {
        // overflow-x: hidden;
        // overflow-y:
    }
`;
