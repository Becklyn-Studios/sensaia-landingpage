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
import { Headline } from "../Headline/Headline";
import { Row } from "../Row/Row";
import { Col } from "../Col/Col";
import { Addition } from "../Addition/Addition";

const BulletpointWrapper = styled.div`
    .bulletpoint__head {
        margin-bottom:9.8rem;
    }

    .bulletpoint__body {
        .addition {
            &:not(:last-child) {
                margin-bottom:3.2rem;
            }
        }

        ul {
            list-style-type:none;

            li {
                position:relative;
                padding-left:2.3rem;

                &:before {
                    content:'';
                    position:absolute;
                    top:0.5rem;
                    left:0rem;
                    width:0.8rem;
                    height:0.8rem;
                    border-radius:50%;
                    background-color: ${p => p.theme.colors.blue};
                 }

                + li {
                   margin-top:1.2rem;
                }
            }
        }
    }

    .bulletpoint__foot {
        margin-top:5.1rem;
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

    return (
        <Container>
            <BulletpointWrapper>
                <div className="bulletpoint__head">
                    <Row>
                        <Col size={{ s: 12, m: 6, l: 8, xl: 5, xxl: 5 }} >
                            <Headline size="xlarge">{t("actions.title")}</Headline>
                        </Col>
                    </Row>
                </div>

                <div className="bulletpoint__body">
                    <Row>
                        {
                            content.map((contentItem, contentIndex) => (
                                <Col size={{ s: 12, m: 6, l: 8, xl: 4, xxl: 4 }} key={contentIndex}>
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

                <div className="bulletpoint__foot">
                    <Button href="#">{t("actions.button")}</Button>
                </div>
            </BulletpointWrapper>
        </Container>
    );
};