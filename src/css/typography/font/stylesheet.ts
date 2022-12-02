/*@todo add fonts*/
import { css } from "styled-components";

export const stylesheet = css`
    @font-face {
        font-family: "Sharp Grotesk DB Cyr Medium 22 Regular";
        src: url("/fonts/Sharp Grotesk Cyr Medium.eot"); /* IE9*/
        src: url("/fonts/Sharp Grotesk Cyr Medium.eot?#iefix") format("embedded-opentype"),
            /* IE6-IE8 */ url("/fonts/Sharp Grotesk Cyr Medium.woff2") format("woff2"),
            /* chrome、firefox */ url("/fonts/Sharp Grotesk Cyr Medium.woff") format("woff"),
            /* chrome、firefox */ url("/fonts/Sharp Grotesk Cyr Medium.ttf") format("truetype"),
            /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
                url("/fonts/Sharp Grotesk Cyr Medium.svg#Sharp Grotesk DB Cyr Medium 22 Regular")
                format("svg"); /* iOS 4.1- */
    }
`;
