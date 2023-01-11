/**
 * External dependencies
 */
import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { breakpoints } from "@css/helper/breakpoints";
import classNames from "classnames";

import { useTranslation } from "next-i18next";

/**
 * Internal dependencies
 */
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Logo } from "../Logo/Logo";
import Menu from "../Menu/Menu";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { NavTrigger } from "../NavTrigger/NavTrigger";
import { MenuLink } from "../MenuLink/MenuLink";

const HeaderWrapper = styled.div`
    position: fixed;
    z-index: 13;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2.2rem 0;
    transition: background-color 0.2s;

    ${breakpoints().min("l")} {
        background-color: #041c31;
    }

    ${breakpoints().max("l")} {
        position: fixed;
        z-index: 11;
        top: 0;
        left: 0;
        width: 100%;
    }

    .header__inner {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .header__menu {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-left: auto;
        width: 10%;
        flex-grow: 1;
        z-index: 9;

        ${breakpoints().max("l")} {
            font-size: 3.8rem;
            display: grid;
            align-items: normal;
            justify-content: normal;
            flex-wrap: nowrap;
            position: fixed;
            z-index: 10;
            top: 0;
            left: 100%;
            height: 100vh;
            width: 100%;
            padding: 10.1rem 2rem 2.6rem;
            overflow-y: auto;
            overflow-x: hidden;
            background-color: ${p => p.theme.colors.blue2};
            transition: transform 0.3s;

            &.is-nav-open {
                transform: translateX(-100%);
            }
        }

        .header__menu-inner {
            margin-left: auto;
            margin-right: 5.1%;

            ${breakpoints().max("xxl")} {
                margin-right: 6%;
            }

            ${breakpoints().max("l")} {
                margin: 0 0 5rem;
                width: 100%;
            }

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
                    pointer-events: none;
                }

                &:hover {
                    cursor: pointer;

                    &:before {
                        transform: scaleX(1);
                    }
                }
            }
        }
    }

    .header__menu-utils {
        display: flex;
        flex-direction: row;
        gap: 30px;
        align-items: center;

        ${breakpoints().max("l")} {
            font-size: 0;
            margin-top: auto;
            width: 100%;
            flex-direction: row-reverse;
            justify-content: flex-end;
            align-items: center;
        }
    }

    .nav-trigger {
        ${breakpoints().min("l")} {
            display: none !important;
        }

        margin-left: auto;
    }

    &.is-scrolled {
        background-color: #041c31;
    }
`;

export const Header: React.FC = () => {
    const { t } = useTranslation();
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    const Scroll = require("react-scroll");
    const Events = Scroll.Events;

    Events.scrollEvent.register("begin", function () {
        setIsNavOpen(false);
    });

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(scrollY > 100);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <HeaderWrapper className={classNames({ "is-scrolled": isScrolled })}>
            <Container>
                <div className="header__inner">
                    <Logo />

                    <div className={classNames("header__menu", { "is-nav-open": isNavOpen })}>
                        <div className="header__menu-inner">
                            <Menu>
                                <MenuLink id="/#section1" setIsNavOpen={setIsNavOpen}>
                                    {t("menu.Solar & Wind")}
                                </MenuLink>

                                <MenuLink id="/#section2" setIsNavOpen={setIsNavOpen}>
                                    {t("menu.Features")}
                                </MenuLink>

                                <MenuLink id="/#section3" setIsNavOpen={setIsNavOpen}>
                                    {t("menu.USPs")}
                                </MenuLink>

                                <MenuLink id="/#form" setIsNavOpen={setIsNavOpen}>
                                    {t("menu.Benefits")}
                                </MenuLink>

                                <MenuLink id="/#section5" setIsNavOpen={setIsNavOpen}>
                                    {t("menu.About")}
                                </MenuLink>
                            </Menu>
                        </div>

                        <div className="header__menu-utils">
                            <LanguageSwitcher />

                            <Link href="/#form">
                                <Button>{t("contact-button")}</Button>
                            </Link>
                        </div>
                    </div>

                    <NavTrigger isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
                </div>
            </Container>
        </HeaderWrapper>
    );
};
