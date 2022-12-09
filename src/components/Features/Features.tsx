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
import { Services } from "../Services/Services";
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
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
`;

const FeaturedFoot = styled.div`
    margin-top:5rem;
    text-aling:center;
`;


export const Features: React.FC<{}> = () => {
    const { t } = useTranslation("common");

    return (
        <Container>
            <FeaturesWrapper className="featured">
                <FeaturedHead className="featured__head">
                    <BlockHead>
                        <Headline size="large">All your renewable assets  need – on one platform.</Headline>
                        <Paragraph size="copyText">Sensaia is a digital solution tailored to the needs of PV and WTG plant owners, operators and asset managers. Sensaia helps to turn insights into actions and thus to boost the profitability of renewable energy assets. The independent asset management software is technology agnostic, but specialized in solar and wind.</Paragraph>
                    </BlockHead>
                </FeaturedHead>

                <FeaturedBody className="featured__body">
                    <Row>
                        <Col size={{ s: 12, m: 6, l: 8, xl: 12, xxl: 8 }}>
                            <Services icon="/ico-1.svg" title="Solar use cases" text="e.g. soiling forecasts or reliable identification of tracker failures and misalignment" />
                        </Col>
                    </Row>
                </FeaturedBody>

                <FeaturedFoot>
                    <Button href="#">{t("hero.button")}</Button>
                </FeaturedFoot>
            </FeaturesWrapper>
            
            
        </Container>
    );
};
