import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { stylesheet } from "./typography/font/stylesheet";

export const GlobalStyle = createGlobalStyle`
    ${reset};
    ${stylesheet};

    body {
        background-color: #041C31;
        font-family: 'Sharp Grotesk DB Cyr', sans-serif;
    }

    .wrapper {
    	overflow:hidden;
    }
`;
