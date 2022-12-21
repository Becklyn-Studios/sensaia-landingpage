/**
 * External dependencies
 */
import styled from "styled-components";
import React, { useState, useEffect, useCallback } from 'react'
import { useTranslation } from "next-i18next";
import { DotButton } from "./EmblaCarouselButtons";
import Image from "next/image";
import { Container } from "../Container/Container";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useEmblaCarousel from 'embla-carousel-react'
import AutoHeight from 'embla-carousel-auto-height'
import { breakpoints } from "@css/helper/breakpoints";

import { Headline } from "../Headline/Headline";

const SliderGalleryWrapper = styled.div`
    .embla {
        .embla__viewport {
            overflow: hidden;
            margin:0 -1rem;
        }

        .embla__container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            transition: height 0.3s;
        }

        .embla__slide {
            flex: 1 0 100%;

            &-inner {
                padding:0 1rem;
            }

            .heading {
                margin-bottom:3.1rem;

                ${breakpoints().max("m")} {
                    margin-bottom:1.5rem;
                }
            }

            p {
                margin-bottom:4.9rem;

                ${breakpoints().max("m")} {
                    margin-bottom:2.9rem;
                }
            }

            img {
                width:100%;
                height:auto;
            }
        }

        .embla__foot {
            font-size:0;
            display:flex;
            flex-wrap: wrap;
            align-items:center;
            margin-top:1.4rem;
        }
       
        .embla__paging {
            display:flex;
            align-items:center;
            font-size:1.6rem;
            font-weight:500;
            letter-spacing:-0.02em;

            p {
                margin:0 0.5rem;
            }
        }

        .embla__dots {
            margin-right:auto;
            
            .embla__dot {
                width:2.6rem;
                height:0.3rem;
                background-color: #3F5E79;
                transition: background-color 0.3s;

                &.is-selected {
                    background-color: white;
                }

                + .embla__dot {
                    margin-left:1.5rem;
                }
            }
        }
    }
`;


export const SliderGallery: React.FC = () => {
    const options = { destroyHeight: 'auto' } // Options
    const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [AutoHeight(options)])
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollTo = useCallback((index:number) => embla && embla.scrollTo(index), [ embla ]);

    const { t } = useTranslation();
    const gallery = [
        {
            "title": t("monitoring.media.0.title"),
            "content": t("monitoring.media.0.content"),
            "media":<Image src="/slider/monitoring.svg" width={808} height={423} alt="img" />
        },
        {
            "title": t("monitoring.media.1.title"),
            "content": t("monitoring.media.1.content"),
            "media":<Image src="/slider/predicting.svg" width={820} height={480} alt="img" />
        },
        {
            "title": t("monitoring.media.2.title"),
            "content": t("monitoring.media.2.content"),
            "media":<Image src="/slider/alerting.svg" width={826} height={138} alt="img" />
        },
        {
            "title": t("monitoring.media.3.title"),
            "content": t("monitoring.media.3.content"),
            "media":<Image src="/slider/ticketing.svg" width={726} height={600} alt="img" />
        },
        {
            "title": t("monitoring.media.4.title"),
            "content": t("monitoring.media.4.content"),
            "media":<Image src="/slider/reporting.svg" width={540} height={268} alt="img" />
        }
    ];

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
    }, [embla, setSelectedIndex]);

    useEffect(() => {
        AOS.init();
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);

        const timer = setTimeout(() => {
            embla.reInit()
        }, 100);
        return () => clearTimeout(timer);
    }, [embla, setScrollSnaps, onSelect]);

    return (
        <SliderGalleryWrapper>
              <Container>
                <div className="embla" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container">
                            {gallery.map((item, index) => (
                                <div className="embla__slide" key={index}>
                                    <div className="embla__slide-inner">
                                        <Headline size="medium" smallDeskSize="medium" tabletSize="xlarge" mobileSize="medium">{item.title}</Headline>

                                        <p>{item.content}</p>

                                        {item.media}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="embla__foot">
                        <div className="embla__dots">
                            {scrollSnaps.map((_, index) => (
                              <DotButton
                                key={index}
                                selected={index === selectedIndex}
                                onClick={() => scrollTo(index)}
                              />
                            ))}
                        </div>

                        <div className="embla__paging">
                            <span>{selectedIndex+1}</span>
                            <p>/</p>
                            <span>{gallery.length}</span>
                        </div>
                    </div>
                </div>
            </Container>
        </SliderGalleryWrapper>
    );
};
