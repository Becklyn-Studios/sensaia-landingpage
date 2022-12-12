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
// import { SliderTestimonials } from "../SliderTestimonials/SliderTestimonials";

const TestimonialsWrapper = styled.div`
`;


export const Testimonials: React.FC<{}> = () => {
    const { t } = useTranslation();

    {/*const featuresList = [
        {
            "comment": "Transparent, dynamisch, smart – das wohl intuitivste Monitoring-Portal auf dem Markt. ",
            "author": "Carsten Roller, O&M Manager"
        },
        {
            "comment": "Transparent, dynamisch, smart – das wohl intuitivste Monitoring-Portal auf dem Markt. ",
            "author": "Carsten Roller, O&M Manager"
        }
    ];*/}

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
                            {/*<SliderTestimonials slides={featuresList}/>*/}
                        </div>
                    </Col>
                </Row>
            </TestimonialsWrapper>
        </Container>
    );
};
