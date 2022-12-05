/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

const LanguageSwitcherButton = styled.div`
    font-size: 16px;
    line-height: 16px;
    color: #3f5e79;
`;

export const LanguageSwitcher: React.FC<{}> = () => {
    // const languageOptions = {
    //     en: "EN",
    //     de: "DE",
    // };

    return <LanguageSwitcherButton>DE</LanguageSwitcherButton>;
};
