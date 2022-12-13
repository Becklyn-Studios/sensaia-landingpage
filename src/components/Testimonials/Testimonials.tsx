/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import { useTranslation } from "next-i18next";

import { Container } from "../Container/Container";
import { Headline } from "../Headline/Headline";
import { Row } from "../Row/Row";
import { Col } from "../Col/Col";
import { SliderTestimonials } from "../SliderTestimonials/SliderTestimonials";

const TestimonialsWrapper = styled.div`
`;


export const Testimonials: React.FC<{}> = () => {
    const { t } = useTranslation();

    const testimonials = [
        {
            "comment": t("testimonials.list.0.comment"),
            "author": t("testimonials.list.0.author")
        },
        {
            "comment": t("testimonials.list.1.comment"),
            "author": t("testimonials.list.1.author")
        },
        {
            "comment": t("testimonials.list.2.comment"),
            "author": t("testimonials.list.2.author")
        },
        {
            "comment": t("testimonials.list.3.comment"),
            "author": t("testimonials.list.3.author")
        }
    ];

    return (
        <Container>
            <TestimonialsWrapper>
                <Row>
                    <Col size={{ s: 12, m: 6, l: 8, xl: 5, xxl: 5 }} >
                        <div className="testimonials__content">
                            <Headline size="large">{t("testimonials.title")}</Headline>
                        </div>
                    </Col>

                    <Col size={{ s: 12, m: 6, l: 8, xl: 5, xxl: 5 }} >
                        <div className="testimonials__media">
                            {<SliderTestimonials slides={testimonials}/>}
                        </div>
                    </Col>
                </Row>
            </TestimonialsWrapper>
        </Container>
    );
};
