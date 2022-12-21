/**
 * External dependencies
 */
import React, {useEffect} from "react";
import styled from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useTranslation } from "next-i18next";
import { breakpoints } from "@css/helper/breakpoints";

/**
 * Internal dependencies
 */
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Headline } from "../Headline/Headline";
import { Row } from "../Row/Row";
import { Col } from "../Col/Col";
import { Addition } from "../Addition/Addition";

const BulletpointWrapper = styled.div`
    .bulletpoint__head {
        margin-bottom:10.1rem;

        ${breakpoints().max("l")} {
            margin-bottom:7rem;

        }
    }

    .bulletpoint__body {
        > .row {
            ${breakpoints().max("l")} {
                --guter-y : 4.9rem;
            }
        }

        .addition {
            &:not(:last-child) {
                margin-bottom:3.2rem;

                ${breakpoints().max("l")} {
                    margin-bottom:2.2rem;
                }

                ${breakpoints().max("m")} {
                    margin-bottom:2.3rem;
                }
            }
        }

        ul {
            list-style-type:none;

            ${breakpoints().max("l")} {
                line-height:1.25;
            }

            li {
                position:relative;
                padding-left:2.3rem;

                ${breakpoints().max("l")} {
                    padding-left:1.9rem;
                }

                ${breakpoints().max("m")} {
                    padding-left:1.7rem;
                }

                &:before {
                    content:'';
                    position:absolute;
                    top:0.5rem;
                    left:0rem;
                    width:0.8rem;
                    height:0.8rem;
                    border-radius:50%;
                    background-color: ${p => p.theme.colors.blue};

                    ${breakpoints().max("l")} {
                        top:0.7rem;
                    }
                 }

                + li {
                   margin-top:0.7rem;
                    
                    ${breakpoints().max("l")} {
                       margin-top:1.1rem;
                    }
                }
            }
        }
    }

    .bulletpoint__foot {
        margin-top:4.9rem;
    }
`;

export const Bulletpoint: React.FC<{}> = () => {
    const { t } = useTranslation("common");

    const content = [
        {
            "subtitle": t("actions.content.0.sub-title"),
            "list" :  [t("actions.content.0.list.0"), t("actions.content.0.list.1"), t("actions.content.0.list.2"), t("actions.content.0.list.3"), t("actions.content.0.list.4"), t("actions.content.0.list.5")]
        },
        {
            "subtitle": t("actions.content.1.sub-title"),
            "list" :  [t("actions.content.1.list.0"), t("actions.content.1.list.1"), t("actions.content.1.list.2"), t("actions.content.1.list.3"), t("actions.content.1.list.4"), t("actions.content.1.list.5")]
        }
    ]

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Container>
            <BulletpointWrapper>
                <div className="bulletpoint__head" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <Row>
                        <Col size={{ s: 12, m: 8, l: 8, xl: 6, xxl: 5 }} >
                            <Headline size="xlarge" smallDeskSize="large" tabletSize="large" mobileSize="medium">{t("actions.title")}</Headline>
                        </Col>
                    </Row>
                </div>

                <div className="bulletpoint__body" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <Row>
                        {
                            content.map((contentItem, contentIndex) => (
                                <Col size={{ s: 12, m: 7, l: 6, xl: 5, xxl: 4 }} key={contentIndex}>
                                    <Addition size="base">{contentItem.subtitle}</Addition>

                                    <ul>
                                        {
                                            contentItem.list.map((listItem, listIndex) => (
                                                <li key={listIndex}>
                                                    {listItem}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </Col>
                            ))
                        }
                    </Row>
                </div>

                <div className="bulletpoint__foot" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <Button href="#">{t("actions.button")}</Button>
                </div>
            </BulletpointWrapper>
        </Container>
    );
};
