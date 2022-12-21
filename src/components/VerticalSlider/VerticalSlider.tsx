/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Parallax } from "react-parallax";
import { useTranslation } from "next-i18next";
import { breakpoints } from "@css/helper/breakpoints";

import { Headline } from "../Headline/Headline";
import { BlockHead } from "../BlockHead/BlockHead";
import { Container } from "../Container/Container";
import { Row } from "../Row/Row";
import { Col } from "../Col/Col";
import { Paging } from "../Paging/Paging";
import { ImageMasked } from "../ImageMasked/ImageMasked";

const SliderWrapper = styled.div`
    .row {
        --guter-y : 0rem;
        align-items:center;
    }

    .slider__slides {
        .slider__slide {
            &-inner {
                position:relative;
                display:flex;
                align-items:center;
                flex-wrap: wrap;
                padding: 8rem 0;
                min-height:50rem;

                ${breakpoints().max("xl")} {
                    padding: 5rem 0;
                    min-height:40rem;
                }
            }

            &:first-child .slider__slide-inner {
                padding-top: 0;
            }
            &:last-child .slider__slide-inner {
                padding-bottom: 0;
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
        pointer-events:none;
    }

    .slider__media {
        img {
            width:100%;
            height:auto;
            transition: filter 0.3s;
        }
    }

    .pagging-holder {
        text-align:right;
        width:100%;
        direction: rtl;
        transition: opacity 0.2s;
    }

    .paging {
        position:fixed;
        top:50%;
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

    const setOpacity = (value:number, startPoint:number, endPoint:number) => {
        if (startPoint < value && value < endPoint ) {
            const mapedValue =  (value - startPoint)/( endPoint - startPoint);

            if (mapedValue < 0.33) {
                return (mapedValue * 2)
            }if (0.33 <= mapedValue && mapedValue <= 0.66) {
                return (1)
            }else {
                return ( 1 - (mapedValue - 0.66)*3 )
            }
        }
        return ( 0 )
    }

    return (
    	<SliderWrapper>
            <Container>
                <div className="slider__slides">
                    {
                        featuresList.map((item, index) => (
                            <div className="slider__slide" key={index}>
                                <Parallax
                                    renderLayer={(percentage) => (  
                                        <div className="slider__slide-inner">
                                            <div className="slider__content" style={{opacity: setOpacity(percentage, 0.5, 0.85)}}>
                                                <Container>
                                                    <Row>
                                                        <Col size={{ m: 12, l:5, xl: 5, xxl: 4 }}>
                                                            <BlockHead>
                                                                <Headline size="xxlarge" smallDeskSize="large" tabletSize="large" mobileSize="large">{item.title}</Headline>
                                                                <p>{item.content}</p>
                                                            </BlockHead>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </div>

                                            <div className="slider__main">
                                                <Row>
                                                    <Col size={{ l:5, xl: 6, xxl: 5 }}>
                                                        <div className="hidden"></div>
                                                    </Col>

                                                    <Col size={{ m: 12, l:6, xl: 5, xxl: 6 }}>
                                                        <div className="slider__media" style={{opacity: setOpacity(percentage, 0.2, 1.2)}}>
                                                            <ImageMasked>
                                                                <Image src={item.media} width={807.6} height={423} alt="icon" />
                                                            </ImageMasked>
                                                        </div>
                                                    </Col>

                                                    <Col size={{ m: 12,  xl: 1, xxl: 1 }}>
                                                        <div className="pagging-holder" style={{opacity: (0.2 < percentage && percentage < 0.85) ? 1 : 0}}>
                                                            <Paging list={featuresList} index={index}/>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                        ))
                    }
                </div>
            </Container>
    	</SliderWrapper>
    );
};


