/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

import { useTranslation } from "next-i18next";

/**
 * Internal dependencies
 */
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Logo } from "../Logo/Logo";
import Menu from "../Menu/Menu";
import MenuItem from "../Menu/MenuItem";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";

const HeaderWrapper = styled.div`
    padding-top: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const HeaderMenuWrapper = styled.div`
    margin-left: auto;
    margin-right: 80px;
`;

const HeaderMenuUtils = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;
`;

export const Header: React.FC<{}> = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <HeaderWrapper>
                <Logo />

                <HeaderMenuWrapper>
                    <Menu>
                        <MenuItem href="#">{t("menu.Solar & Wind")}</MenuItem>
                        <MenuItem href="#">{t("menu.Features")}</MenuItem>
                        <MenuItem href="#">{t("menu.USPs")}</MenuItem>
                        <MenuItem href="#">{t("menu.Benefits")}</MenuItem>
                        <MenuItem href="#">{t("menu.About")}</MenuItem>
                    </Menu>
                </HeaderMenuWrapper>

                <HeaderMenuUtils>
                    <LanguageSwitcher />

                    <Button>{t("contact-button")}</Button>
                </HeaderMenuUtils>
            </HeaderWrapper>
        </Container>
    );
};
