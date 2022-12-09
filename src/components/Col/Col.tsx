/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

const ColWrapper = styled.div`
    padding: var(--guter-y) calc(var(--guter-x) * 0.5) 0;
    width: 100%;
`;


type Props = {
    children: | JSX.Element | JSX.Element[],
    size: object,
};

export const Col: React.FC<Props> = ({ children, size }) => {
    console.log(size);
    return (
        <ColWrapper>
            {children}
        </ColWrapper>
    );
};
