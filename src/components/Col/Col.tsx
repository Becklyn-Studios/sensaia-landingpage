/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

import { breakpoints } from "@css/helper/breakpoints";
import { columns } from "@css/helper/columns";

const ColWrapper = styled.div`
    padding: var(--guter-y) calc(var(--guter-x) * 0.5) 0;
    width: 100%;

    // ${breakpoints().max("l")} {
    //     background: red;
    // }

    ${p => columns(p.size)}
`;


type Props = {
    children: | JSX.Element | JSX.Element[],
    size: object,
};

export const Col: React.FC<Props> = ({ children, size }) => {

    return (
        <ColWrapper size={size}>
            {children}
        </ColWrapper>
    );
};
