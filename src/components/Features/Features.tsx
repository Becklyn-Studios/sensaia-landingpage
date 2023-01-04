/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

import { useTranslation } from "next-i18next";
import { breakpoints } from "@css/helper/breakpoints";

/**
 * Internal dependencies
 */
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Headline } from "../Headline/Headline";
import { Feature } from "../Feature/Feature";
import { BlockHead } from "../BlockHead/BlockHead";
import { Row } from "../Row/Row";
import { Col } from "../Col/Col";
import { AnimateElement } from "../AnimateElement/AnimateElement";

const FeaturesWrapper = styled.div`
    text-align: center;
`;

const FeaturedHead = styled.div`
    margin: 0 auto 8.9rem;
    max-width: 81rem;

    ${breakpoints().max("xxl")} {
        max-width: 66.67%;
        padding: 0 3rem;
        margin: 0 auto 9rem;
    }

    ${breakpoints().max("xl")} {
        max-width: 75%;
        padding: 0 2rem;
        margin: 0 auto 6.2rem;
    }

    ${breakpoints().max("m")} {
        max-width: 100%;
        padding: 0 0;
        margin: 0 auto 5.3rem;
    }
`;

const FeaturedBody = styled.div`
    .row {
        justify-content: center;

        ${breakpoints().max("m")} {
            --guter-y: 4.4rem;
        }
    }
`;

const FeaturedFoot = styled.div`
    margin-top: 5rem;
    text-aling: center;

    ${breakpoints().max("m")} {
        margin-top: 3rem;
    }
`;

export const Features: React.FC<{}> = () => {
    const { t } = useTranslation("common");

    const featuresList = [
        {
            icon: "/ico-1.svg",
            title: t("features.list-features.0.title"),
            subtitle: t("features.list-features.0.sub-title"),
        },
        {
            icon: "/ico-2.svg",
            title: t("features.list-features.1.title"),
            subtitle: t("features.list-features.1.sub-title"),
        },
    ];

    return (
        <Container>
            <FeaturesWrapper className="featured">
                <FeaturedHead className="featured__head">
                    <AnimateElement>
                        <BlockHead>
                            <Headline
                                size="large"
                                smallDeskSize="medium"
                                tabletSize="medium"
                                mobileSize="small">
                                {t("features.title")}
                            </Headline>

                            <p>{t("features.sub-title")}</p>
                        </BlockHead>
                    </AnimateElement>
                </FeaturedHead>

                <FeaturedBody className="featured__body">
                    <AnimateElement>
                        <Row>
                            {featuresList.map((item, index) => (
                                <Col size={{ s: 12, m: 6, l: 5, xl: 5, xxl: 4 }} key={index}>
                                    <Feature icon={item.icon} title={item.title} text={item.subtitle} />
                                </Col>
                            ))}
                        </Row>
                    </AnimateElement>
                </FeaturedBody>

                <FeaturedFoot data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <AnimateElement>
                        <Button href="#">{t("features.button")}</Button>
                    </AnimateElement>
                </FeaturedFoot>
            </FeaturesWrapper>
        </Container>
    );
};
