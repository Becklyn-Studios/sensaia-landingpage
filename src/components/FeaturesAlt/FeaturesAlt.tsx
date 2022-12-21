/**
 * External dependencies
 */
import React, {useEffect} from "react";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { breakpoints } from "@css/helper/breakpoints";

/**
 * Internal dependencies
 */

import { Container } from "../Container/Container";
import { Headline } from "../Headline/Headline";
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

    ${breakpoints().max("l")} {
        margin:0 auto 7.3rem;
    }

    ${breakpoints().max("m")} {
        margin:0 auto 6.2rem;
    }
`;

const FeaturedBody = styled.div`
    .row {
        justify-content:center;

        ${breakpoints().max("l")} {
            --guter-y : 5.5rem;
        }
    }
`;

export const FeaturesAlt: React.FC<{}> = () => {
    const { t } = useTranslation("common");

    const featuresList = [
        {
            icon: "/ico-cloud.svg",
            subtitle: t("features-big.list-features.0.sub-title")
        },
        {
            icon: "/ico-3.svg",
            subtitle: t("features-big.list-features.1.sub-title")
        },
        {
            icon: "/ico-4.svg",
            subtitle: t("features-big.list-features.2.sub-title")
        },
        {
            icon: "/ico-5.svg",
            subtitle: t("features-big.list-features.3.sub-title")
        }
    ];

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Container>
            <FeaturesWrapper className="featured">
                <FeaturedHead className="featured__head" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <BlockHead>
                        <Headline size="large" smallDeskSize="medium" tabletSize="medium" mobileSize="small">{t("features-big.title")}</Headline>
                    </BlockHead>
                </FeaturedHead>

                <FeaturedBody className="featured__body">
                    <Row >
                        {
                            featuresList.map((item, index) => (
                                <Col size={{ s: 12, m: 6, l: 3, xl: 3, xxl: 3 }} key={index}>
                                    <Feature icon={item.icon} title="" text={item.subtitle} />
                                </Col>
                            ))
                        }
                    </Row>
                </FeaturedBody>
            </FeaturesWrapper>
        </Container>
    );
};
