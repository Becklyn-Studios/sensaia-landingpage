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
    const { asPath } = useRouter();

    const targetLocale = isDefaultLocale ? LOCALE_DE : LOCALE_DEFAULT;

    const getTargetPath = () => {
        if (asPath.startsWith(`/${LOCALE_DEFAULT}`)) {
            return asPath.replace(`/${LOCALE_DEFAULT}`, `/${LOCALE_DE}`);
        } else if (asPath.startsWith(`/${LOCALE_DE}`)) {
            return asPath.replace(`/${LOCALE_DE}`, "/");
        } else {
            return asPath.replace("/", `/${LOCALE_DE}`);
        }
    };

    return (
        <LanguageSwitcherAnchor
            href={getTargetPath()}
            className="language-switcher"
            lang={targetLocale}
            hrefLang={targetLocale}>
            {targetLocale.toUpperCase()}
        </LanguageSwitcherAnchor>
    );
};
