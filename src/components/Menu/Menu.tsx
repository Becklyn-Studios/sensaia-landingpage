/**
 * External dependencies
 */
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;
`;

const Menu: React.FC<PropsWithChildren> = ({ children }) => {
    return <MenuWrapper>{children}</MenuWrapper>;
};

export default Menu;
