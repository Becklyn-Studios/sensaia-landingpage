/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

import { columns } from "@css/helper/columns";

const ColWrapper = styled.div<Props>`
    padding: var(--guter-y) calc(var(--guter-x) * 0.5) 0;
    width: 100%;

    ${p => columns(p.size)}
`;



type Props = {
    children: React.ReactNode,
    size: object,
};

export const Col: React.FC<Props> = ({ children, size }) => {

    return (
        <ColWrapper size={size}>
            {children}
        </ColWrapper>
    );
};
