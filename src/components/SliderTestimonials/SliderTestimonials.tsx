/**
 * External dependencies
 */
import styled from "styled-components";
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { PrevButton, NextButton, DotButton } from "./EmblaCarouselButtons";

import { Testimonial } from "../Testimonial/Testimonial";

const SliderWrapper = styled.div`
    .embla {
        .embla__viewport {
          overflow: hidden;
        }

        .embla__container {
            display: flex;
            flex-direction: row;
            height: auto;
            margin:0 -1rem;
        }

        .embla__slide {
            flex: 0 0 100%;
            padding:0 1rem;
        }

        .embla__foot {
            font-size:0;
            display:flex;
            flex-wrap: wrap;
            align-items:center;
            padding:2rem 0 0;
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
        
        .embla__button {
            + .embla__button {
                margin-left: 2rem;
            }
        }
    }
`;

type PropType = {
   slides: {
        comment: string,
        author: string
   }[]
 }

export const SliderTestimonials: React.FC<PropType> = ({slides}) => {
    const [emblaRef, embla] = useEmblaCarousel({ loop: true })
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const scrollTo = useCallback((index:number) => embla && embla.scrollTo(index), [ embla ]);


    const onSelect = useCallback(() => {
      if (!embla) return;
      setSelectedIndex(embla.selectedScrollSnap());
      setPrevBtnEnabled(embla.canScrollPrev());
      setNextBtnEnabled(embla.canScrollNext());
    }, [embla, setSelectedIndex]);

    useEffect(() => {
      if (!embla) return;
      onSelect();
      setScrollSnaps(embla.scrollSnapList());
      embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);

    return (
        <SliderWrapper>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {slides.map((item, index) => (
                            <div className="embla__slide" key={index}>
                                <Testimonial comment={item.comment} author={item.author}/>
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

                    <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />

                    <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
                </div>
            </div>
        </SliderWrapper>
    );
};
