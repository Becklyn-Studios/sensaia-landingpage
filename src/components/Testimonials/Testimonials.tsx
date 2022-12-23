/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { breakpoints } from "@css/helper/breakpoints";

import { Container } from "../Container/Container";
import { Headline } from "../Headline/Headline";
import { Row } from "../Row/Row";
import { Col } from "../Col/Col";
import { SliderTestimonials } from "../SliderTestimonials/SliderTestimonials";

const TestimonialsWrapper = styled.div`
    > .row {
        display: flex;
        align-items: flex-end;
    }

    .testimonials__content {
        padding-right: 20%;
        padding-bottom: 8.8rem;

        ${breakpoints().max("xxl")} {
            padding-bottom: 7.2rem;
        }

        ${breakpoints().max("l")} {
            padding-bottom: 1.9rem;
        }

        ${breakpoints().max("m")} {
            padding-bottom: 2.1rem;
        }
    }
`;

export const Testimonials: React.FC<{}> = () => {
    const { t } = useTranslation();

    const testimonials = [
        {
            comment: t("testimonials.list.0.comment"),
            author: t("testimonials.list.0.author"),
        },
        {
            comment: t("testimonials.list.1.comment"),
            author: t("testimonials.list.1.author"),
        },
        {
            comment: t("testimonials.list.2.comment"),
            author: t("testimonials.list.2.author"),
        },
        {
            comment: t("testimonials.list.3.comment"),
            author: t("testimonials.list.3.author"),
        },
    ];

    return (
        <Container>
            <TestimonialsWrapper>
                <Row>
                    <Col size={{ s: 12, m: 12, l: 5, xl: 5, xxl: 5 }}>
                        <div
                            className="testimonials__content"
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                            <Headline
                                size="xlarge"
                                smallDeskSize="large"
                                tabletSize="large"
                                mobileSize="medium">
                                {t("testimonials.title")}
                            </Headline>
                        </div>
                    </Col>

                    <Col size={{ s: 12, m: 12, l: 7, xl: 6, xxl: 5 }}>
                        <div
                            className="testimonials__media"
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                            {<SliderTestimonials slides={testimonials} />}
                        </div>
                    </Col>
                </Row>
            </TestimonialsWrapper>
        </Container>
    );
};
