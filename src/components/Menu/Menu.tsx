/**
 * External dependencies
 */
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    align-items: center;
    letter-spacing: -0.01em;
    font-weight:500;
`;

const Menu: React.FC<PropsWithChildren> = ({ children }) => {
    return <MenuWrapper>{children}</MenuWrapper>;
};

export default Menu;
