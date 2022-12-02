import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
    width: 100%;
    max-width: 1680px;
    margin: auto;
    padding: 0 22px;
`;

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
    return <ContainerWrapper>{children}</ContainerWrapper>;
};
