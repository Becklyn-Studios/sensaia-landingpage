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
import { Paragraph } from "../Paragraph/Paragraph";
import { Feature } from "../Feature/Feature";
import { BlockHead } from "../BlockHead/BlockHead";
import { Row } from "../Row/Row";
import { Col } from "../Col/Col";

const FeaturesWrapper = styled.div`
    text-align:center;
`;

const FeaturedHead = styled.div`
    margin:0 auto 9rem;
    max-width:81rem;
`;

const FeaturedBody = styled.div`
    .row {
        justify-content:center;
    }
`;

const FeaturedFoot = styled.div`
    margin-top:5rem;
    text-aling:center;
`;

export const Features: React.FC<{}> = () => {
    const { t } = useTranslation("common");

    const featuresList = [
        {
            icon: "/ico-1.svg",
            title: t("features.list-features.[0].title"),
            subtitle: t("features.list-features.[0].sub-title")
        },
        {
            icon: "/ico-2.svg",
            title: t("features.list-features.[1].title"),
            subtitle: t("features.list-features.[1].sub-title")
        }
    ];

    return (
        <Container>
            <FeaturesWrapper className="featured">
                <FeaturedHead className="featured__head">
                    <BlockHead>
                        <Headline size="large">{t("features.title")}</Headline>
                        
                        <p>{t("features.sub-title")}</p>
                    </BlockHead>
                </FeaturedHead>

                <FeaturedBody className="featured__body">
                    <Row>
                        {
                            featuresList.map((item, index) => (
                                <Col size={{ s: 12, m: 6, l: 8, xl: 12, xxl: 4 }} key={index}>
                                    <Feature icon={item.icon} title={item.title} text={item.subtitle} />
                                </Col>
                            ))
                        }
                    </Row>
                </FeaturedBody>

                <FeaturedFoot>
                    <Button href="#">{t("features.button")}</Button>
                </FeaturedFoot>
            </FeaturesWrapper>
        </Container>
    );
};