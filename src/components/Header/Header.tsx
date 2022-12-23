/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { breakpoints } from "@css/helper/breakpoints";
import classNames from "classnames";
import { useRouter } from "next/router";

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

const HeaderWrapper = styled.div`
    padding-top: 80px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    ${breakpoints().max("xxl")} {
        padding-top: 40px;
    }

    ${breakpoints().max("l")} {
        position: fixed;
        z-index: 11;
        top: 0;
        left: 0;
        width: 100%;
        padding: 4rem 4rem;
    }

    ${breakpoints().max("m")} {
        padding: 2.2rem 2rem;
    }

    .header__menu {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-left: auto;
        width: 10%;
        flex-grow: 1;

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
`;

export const Header: React.FC<{}> = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const Scroll = require("react-scroll");
    const Events = Scroll.Events;

    Events.scrollEvent.register("begin", function () {
        setIsNavOpen(false);
    });

    return (
        <Container>
            <HeaderWrapper>
                <Logo />

                <div className={classNames("header__menu", { "is-nav-open": isNavOpen })}>
                    <div className="header__menu-inner">
                        <Menu>
                            <Link locale={router.locale} scroll={false} href="/#section1">
                                {t("menu.Solar & Wind")}
                            </Link>

                            <Link locale={router.locale} scroll={false} href="/#section2">
                                {t("menu.Features")}
                            </Link>

                            <Link locale={router.locale} scroll={false} href="/#section3">
                                {t("menu.USPs")}
                            </Link>

                            <Link locale={router.locale} scroll={false} href="/#form">
                                {t("menu.Benefits")}
                            </Link>

                            <Link locale={router.locale} scroll={false} href="/#section5">
                                {t("menu.About")}
                            </Link>
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
            </HeaderWrapper>
        </Container>
    );
};
