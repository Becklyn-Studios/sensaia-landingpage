/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { hover } from "@css/helper";
import { useLocale } from "@lib/hook/useLocale";
import { LOCALE_DE, LOCALE_DEFAULT } from "@lib/constant";
import { useRouter } from "next/router";

const LanguageSwitcherAnchor = styled(Link)`
    font-size: 16px;
    line-height: 16px;
    color: #3f5e79;

    ${hover`
        opacity: .7;
    `}
`;

export const LanguageSwitcher: React.FC = () => {
    const { isDefaultLocale } = useLocale();

    const targetLocale = isDefaultLocale ? LOCALE_DE : LOCALE_DEFAULT;

    return (
        <LanguageSwitcherAnchor
            href={`/${isDefaultLocale ? LOCALE_DE : ""}`}
            className="language-switcher"
            lang={targetLocale}
            hrefLang={targetLocale}>
            {targetLocale.toUpperCase()}
        </LanguageSwitcherAnchor>
    );
};
