/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { useTranslation } from "next-i18next";

import { Headline } from "../Headline/Headline";
import { BlockHead } from "../BlockHead/BlockHead";
import { Container } from "../Container/Container";
import { Row } from "../Row/Row";
import { Col } from "../Col/Col";

const SliderWrapper = styled.div`
    .row {
        --guter-y : 0rem;
        align-items:center;
    }

    .slider__slides {
        .slider__slide {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
            display:flex;
            align-items:center;
            flex-wrap: wrap;

            + .slider__slide {
                padding: 6rem 0;
                min-height:50vh;
            }
        }
    }

    .slider__main {
        width:100%;
        align-items:center;
    }

    .slider__content {
        position:fixed;

        left:0;
        width:100%;
        top:50%;
        transform:translateY(-50%);
    }

    .slider__media {
        img {
            width:100%;
            height:auto;
        }
    }
`;

export const VerticalSlider = () => {
    const { t } = useTranslation("common");

    const featuresList = [
        {
            "media": "/slider/monitoring.svg",
            "title": t("monitoring.media.0.title"),
            "content": t("monitoring.media.0.content")
        },
        {
            "media": "/slider/predicting.svg",
            "title": t("monitoring.media.1.title"),
            "content": t("monitoring.media.1.content")
        },
        {
            "media": "/slider/alerting.svg",
            "title": t("monitoring.media.2.title"),
            "content": t("monitoring.media.2.content")
        },
        {
            "media": "/slider/ticketing.svg",
            "title": t("monitoring.media.3.title"),
            "content": t("monitoring.media.3.content")
        },
        {
            "media": "/slider/reporting.svg",
            "title": t("monitoring.media.4.title"),
            "content": t("monitoring.media.4.content")
        }
    ];

    return (
    	<SliderWrapper>
            <Container>
                <div className="slider__slides">
                    {
                        featuresList.map((item, index) => (
                            <div className="slider__slide" key={index}>
                                <div className="slider__content">
                                    <Container>
                                        <Row>
                                            <Col size={{ m: 12,  xl: 6, xxl: 4 }}>
                                                <BlockHead>
                                                    <Headline size="large">{item.title}</Headline>
                                                    <p>{item.content}</p>
                                                </BlockHead>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>

                                <div className="slider__main">
                                    <Row>
                                        <Col size={{ xl: 0, xxl: 5 }}>.</Col>

                                        <Col size={{ m: 12,  xl: 5, xxl: 6 }}>
                                            <div className="slider__media">
                                                <Image src={item.media} width={807.6} height={423} alt="icon" />
                                            </div>
                                        </Col>

                                        <Col size={{ m: 12,  xl: 1, xxl: 1 }}>.</Col>
                                    </Row>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Container>
    	</SliderWrapper>
    );
};
