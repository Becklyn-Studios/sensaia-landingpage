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
// import MenuItem from "../Menu/MenuItem";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { Link } from "react-scroll";

const HeaderWrapper = styled.div`
    padding-top: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const HeaderMenuWrapper = styled.div`
    margin-left: auto;
    margin-right: 5.1%;

    a {
        position: relative;
        color: ${p => p.theme.colors.white};

        ::before {
            content: "";
            position: absolute;
            display: block;
            width: 100%;
            height: 2px;
            bottom: -5px;
            left: 0;
            background-color: ${p => p.theme.colors.white};
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        &:hover {
            cursor:pointer;
            &:before {
                transform: scaleX(1);
            }
        }
    }
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
                        <Link activeClass="active" smooth spy to="section1">{ t("menu.Solar & Wind") }</Link>
                        <Link activeClass="active" smooth spy to="section2">{ t("menu.Features") }</Link>
                        <Link activeClass="active" smooth spy to="section3">{ t("menu.USPs") }</Link>
                        <Link activeClass="active" smooth spy to="form"> { t("menu.Benefits") }</Link>
                        <Link activeClass="active" smooth spy to="section5">{ t("menu.About") }</Link>
                    </Menu>
                </HeaderMenuWrapper>

                <HeaderMenuUtils>
                    <LanguageSwitcher />

                    <Link activeClass="active" smooth spy to="form">
                        <Button>{t("contact-button")}</Button>
                    </Link>
                </HeaderMenuUtils>
            </HeaderWrapper>
        </Container>
    );
};
