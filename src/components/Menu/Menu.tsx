/**
 * External dependencies
 */
import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { breakpoints } from "@css/helper/breakpoints";

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    align-items: center;
    letter-spacing: -0.01em;
    font-weight:500;

    ${breakpoints().max("l")} {
        flex-direction:column;
        align-items:flex-start;
        gap: 0.8rem;
        line-height:1.11;
    }
`;

const Menu: React.FC<PropsWithChildren> = ({ children }) => {
    return <MenuWrapper>{children}</MenuWrapper>;
};

export default Menu;
