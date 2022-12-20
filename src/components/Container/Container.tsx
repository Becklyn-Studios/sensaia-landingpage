import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { breakpoints } from "@css/helper/breakpoints";

const ContainerWrapper = styled.div`
    width: 100%;
    max-width: 168rem;
    margin: auto;
    padding: 0 2.2rem;

    ${breakpoints().max("xxl")} {
    	max-width: 135.4rem;

    }
`;

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
    return <ContainerWrapper>{children}</ContainerWrapper>;
};
