/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { hover } from "@css/helper";

const LanguageSwitcherButton = styled.div`
    font-size: 16px;
    line-height: 16px;
    color: #3f5e79;
    cursor: pointer;

    ${hover`
        opacity: .7;
    `}
`;

export const LanguageSwitcher: React.FC<{}> = () => {
    const router = useRouter();

    const currentLocale = router.locale;
    const switchableLocale = currentLocale === "en" ? "de" : "en";

    const handleLocaleSwitch = () => {
        router.push(router.pathname, "/", { locale: switchableLocale });
    };

    return (
        <LanguageSwitcherButton className="language-switcher" onClick={handleLocaleSwitch}>
            {switchableLocale.toUpperCase()}
        </LanguageSwitcherButton>
    );
};
