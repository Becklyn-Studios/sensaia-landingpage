/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

/**
 * Internal dependencies
 */
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Logo } from "../Logo/Logo";
import Menu from "../Menu/Menu";
import MenuItem from "../Menu/MenuItem";

const LanguageSwitcherButton = styled.div`
    font-size: 16px;
    line-height: 16px;
    color: #3f5e79;
`;

export const LanguageSwitcher: React.FC<{}> = ({ children }) => {
    const languageOptions = {
        en: "EN",
        de: "DE",
    };

    return <LanguageSwitcherButton>DE</LanguageSwitcherButton>;
};
