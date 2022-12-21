/**
 * External dependencies
 */
import styled from "styled-components";
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoHeight from 'embla-carousel-auto-height'
import { PrevButton, NextButton, DotButton } from "./EmblaCarouselButtons";

import { Testimonial } from "../Testimonial/Testimonial";

const SliderWrapper = styled.div`
    .embla {
        .embla__viewport {
            overflow: hidden;
            margin:0 -1rem;
        }

        .embla__container {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            transition: height 0.3s;
        }

        .embla__slide {
            flex: 1 0 100%;
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
            svg {
                pointer-events:none;
            }
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
    const options = { destroyHeight: 'auto' } // Options
    const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [AutoHeight(options)])
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

      const timer = setTimeout(() => {
          embla.reInit()
      }, 100);
      return () => clearTimeout(timer);
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
