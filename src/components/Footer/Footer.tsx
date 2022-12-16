/**
 * External dependencies
 */
import React, { useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Headline } from "../Headline/Headline";
import { Container } from "../Container/Container";
import { Row } from "../Row/Row";
import { Col } from "../Col/Col";
import { ListLogos } from "../ListLogos/ListLogos";
import { ListLinks } from "../ListLinks/ListLinks";

const FooterWrapper = styled.div`
    margin-top:35rem;
    width:100%;
    padding-bottom: 6rem;

    .row {
        --guter-y : 0rem;
    }

    .footer__main {
        .footer__aside {
            text-align:right;
            padding-top:1.4rem;
        }
    }


    .footer__copyright {
        color:#8194A5;
        
        span {
            color: ${p => p.theme.colors.white};
        }
    }

    .footer__foot {
        margin-top:4.2rem;
        border-top:0.1rem solid #3F5E79;
        padding-top:2.5rem;
    }

    .footer__links {
        text-align:right;
    }
`;


export const Footer = () => {
    const { t } = useTranslation("common");

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Container>
        	<FooterWrapper className="footer" data-aos="fade-up">
                <div className="footer__main">
                    <Row>
                        <Col size={{ s: 12, m: 12, l: 6, xl: 6, xxl: 6 }}>
                            <div className="footer__title">
                                <Headline size="small">{ t("footer.title") }</Headline>
                            </div>
                        </Col>

                        <Col size={{ s: 12, m: 12, l: 6, xl: 6, xxl: 6 }}>
                            <div className="footer__aside">
                                <ListLogos/>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="footer__foot">
                    <Row>
                        <Col size={{ s: 12, m: 12, l: 6, xl: 6, xxl: 6 }}>
                            <div className="footer__copyright">
                                <p><span>&copy; 2022 – STEAG GmbH.</span> All rights reserved.</p>
                            </div>
                        </Col>

                        <Col size={{ s: 12, m: 12, l: 6, xl: 6, xxl: 6 }}>
                            <div className="footer__links">
                                <ListLinks/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </FooterWrapper>
        </Container>
    );
};
