/**
 * External dependencies
 */
import React,{useEffect} from "react";
import Image from "next/image";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Internal dependencies
 */
import { Container } from "../Container/Container";
import { Headline } from "../Headline/Headline";
import { BlockHead } from "../BlockHead/BlockHead";

const IntroWrapper = styled.div`
    .inro__head {
        max-width: 66.66%;
        margin:0 auto 9.9rem;

        .heading {
            text-align: center;
        }
    }

    .inro__body {
        > ul {
            font-size:0;
            display:flex;
            justify-content:center;
            margin: 0 calc(50% - 62.2vw) 0 calc(50% - 59.6vw);

            img {
                height:auto;
            }

            > li {
                &:first-child {
                    text-align:right;
                    display:inline-flex;
                    flex-direction:column;
                    align-items:flex-end;

                    ul {
                        display:inline-grid;
                        grid-template-columns: auto auto;
                        column-gap: 2rem;
                        row-gap:1.8rem;

                        &:first-child {
                            max-width:84%;
                        }
                    }

                    > img {
                        margin-top:4.1rem;
                    }
                }

                &:last-child {
                    margin-left: 4.1rem;
                    text-align:left;

                    > ul {
                        display:inline-grid;
                        grid-template-columns: auto;
                        column-gap: 4rem;
                        row-gap:3.5rem;

                        > li {
                            &:first-child {
                                max-width:87%;
                            }
                        }

                        ul {
                            display:flex;

                            li {
                                + li {
                                    margin-left:4rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const Intro: React.FC<{}> = () => {
    const { t } = useTranslation("common");

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Container>
            <IntroWrapper>
                <div className="inro__head" data-aos="fade-up">
                    <BlockHead>
                        <Headline size="large">{t("intro-text")}</Headline>
                    </BlockHead>
                </div>

                <div className="inro__body" data-aos="fade-up">
                    <ul>
                        <li>
                            <ul>
                                <li>
                                    <Image src="/cards/card-1.png" width={390} height={199} alt="img" />
                                </li>

                                <li>
                                    <Image src="/cards/card-2.png" width={390} height={199} alt="img" />
                                </li>

                                <li>
                                    <Image src="/cards/card-3.png" width={390} height={199} alt="img" />
                                </li>

                                <li>
                                    <Image src="/cards/card-4.png" width={390} height={199} alt="img" />
                                </li>
                            </ul>
                            
                            <Image src="/cards/card-5.png" width={960} height={102} alt="img" />
                        </li>

                        <li>
                            <ul>
                                <li>
                                    <Image src="/cards/card-6.png" width={1170} height={132} alt="img" />
                                </li>

                                <li>
                                    <ul>
                                        <li>
                                            <Image src="/cards/card-7.png" width={420} height={594} alt="img" />
                                        </li>

                                        <li>
                                            <Image src="/cards/card-8.png" width={896} height={485} alt="img" />
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </IntroWrapper>
        </Container>
    );
};
