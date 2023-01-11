import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { stylesheet } from "./typography/font/stylesheet";
import { breakpoints } from "@css/helper/breakpoints";

export const GlobalStyle = createGlobalStyle`
    ${reset};
    ${stylesheet};

    html {
        scroll-behavior: smooth;
    }

    body {
    	color: #fff;
        background-color: #041C31;
        font-family: 'Sharp Grotesk DB Cyr', sans-serif;
        letter-spacing: -0.02em;
        line-height: 1.5;
        overflow-x:hidden;
        max-width:100vw;
    }

    .wrapper {
        position: relative;
        max-width:100vw;
        overflow:hidden;
        padding-top: 17rem;

        ${breakpoints().max("xxl")} {
            padding-top: 12rem;
        }

        ${breakpoints().max("l")} {
            padding-top: 10rem;
            overflow:hidden;
        }

        ${breakpoints().max("m")} {
            padding: 2.2rem 2rem;
        }
    }

    .hidden {
        display:none;
    }

    .scroll-to-element {
        padding-top:10rem;
        margin-top:-10rem;
    }
`;
