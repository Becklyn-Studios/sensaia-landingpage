/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { breakpoints } from "@css/helper/breakpoints";

import { Headline } from "../Headline/Headline";
import { Container } from "../Container/Container";
import { Row } from "../Row/Row";
import { Col } from "../Col/Col";
import { ListLogos } from "../ListLogos/ListLogos";
import { ListLinks } from "../ListLinks/ListLinks";

const FooterWrapper = styled.div`
    margin-top: 35rem;
    width: 100%;
    padding-bottom: 6rem;

    ${breakpoints().max("xxl")} {
        margin-top: 25rem;
    }

    ${breakpoints().max("l")} {
        margin-top: 15rem;
    }

    ${breakpoints().max("m")} {
        margin-top: 15.3rem;
    }

    .row {
        --guter-y: 0rem;
    }

    .footer__main {
        .footer__aside {
            text-align: right;
            padding-top: 1.4rem;

            ${breakpoints().max("l")} {
                padding-top: 0.9rem;
            }

            ${breakpoints().max("m")} {
                text-align: left;
                padding-top: 4.2rem;
            }
        }
    }

    .footer__copyright {
        color: #8194a5;

        ${breakpoints().max("m")} {
            margin-top: 2.5rem;
            border-top: 0.1rem solid #3f5e79;
            padding-top: 1rem;
        }

        span {
            color: ${p => p.theme.colors.white};
        }
    }

    .footer__foot {
        margin-top: 4.2rem;
        border-top: 0.1rem solid #3f5e79;
        padding-top: 2.5rem;

        ${breakpoints().max("l")} {
            margin-top: 4.7rem;
            padding-top: 2.1rem;
        }

        ${breakpoints().max("m")} {
            margin-top: 2.4rem;
            padding-top: 1.6rem;
        }

        .row {
            ${breakpoints().max("m")} {
                display: flex;
                flex-direction: column-reverse;
            }
        }
    }

    .footer__links {
        text-align: right;

        ${breakpoints().max("m")} {
            text-align: left;
        }
    }
`;

export const Footer = () => {
    const { t } = useTranslation("common");

    return (
        <Container>
            <FooterWrapper className="footer" data-aos="fade-up">
                <div className="footer__main">
                    <Row>
                        <Col size={{ s: 12, m: 6, l: 6, xl: 6, xxl: 6 }}>
                            <div className="footer__title">
                                <Headline
                                    size="small"
                                    smallDeskSize="small"
                                    tabletSize="small"
                                    mobileSize="small">
                                    {t("footer.title")}
                                </Headline>
                            </div>
                        </Col>

                        <Col size={{ s: 12, m: 6, l: 6, xl: 6, xxl: 6 }}>
                            <div className="footer__aside">
                                <ListLogos />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="footer__foot">
                    <Row>
                        <Col size={{ s: 12, m: 7, l: 6, xl: 6, xxl: 6 }}>
                            <div className="footer__copyright">
                                <p>
                                    <span>&copy; 2022 – STEAG GmbH.</span> All rights reserved.
                                </p>
                            </div>
                        </Col>

                        <Col size={{ s: 12, m: 5, l: 6, xl: 6, xxl: 6 }}>
                            <div className="footer__links">
                                <ListLinks />
                            </div>
                        </Col>
                    </Row>
                </div>
            </FooterWrapper>
        </Container>
    );
};
