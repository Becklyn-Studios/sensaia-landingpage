/**
 * External dependencies
 */
import React, {useEffect} from "react";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Container } from "../Container/Container";
import { Headline } from "../Headline/Headline";
import { Row } from "../Row/Row";
import { Col } from "../Col/Col";
import { SliderTestimonials } from "../SliderTestimonials/SliderTestimonials";

const TestimonialsWrapper = styled.div`
    > .row {
        display:flex;
        align-items:flex-end;
    }

    .testimonials__content {
        padding-right:20%;
        padding-bottom:8.8rem;
    }
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

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Container>
            <TestimonialsWrapper>
                <Row>
                    <Col size={{ s: 12, m: 6, l: 8, xl: 5, xxl: 5 }} >
                        <div className="testimonials__content" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                            <Headline size="xlarge">{t("testimonials.title")}</Headline>
                        </div>
                    </Col>

                    <Col size={{ s: 12, m: 6, l: 8, xl: 5, xxl: 5 }} >
                        <div className="testimonials__media" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                            {<SliderTestimonials slides={testimonials}/>}
                        </div>
                    </Col>
                </Row>
            </TestimonialsWrapper>
        </Container>
    );
};
