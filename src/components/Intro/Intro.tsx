/**
 * External dependencies
 */
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { breakpoints } from "@css/helper/breakpoints";

/**
 * Internal dependencies
 */
import { Container } from "../Container/Container";
import { Headline } from "../Headline/Headline";
import { BlockHead } from "../BlockHead/BlockHead";
import { AnimateElement } from "../AnimateElement/AnimateElement";

const IntroWrapper = styled.div`
    .intro__head {
        max-width: 99.4rem;
        margin: 0 auto 9.9rem;

        ${breakpoints().max("l")} {
            max-width: 75%;
            margin: 0 auto 4.9rem;
        }

        ${breakpoints().max("m")} {
            max-width: 94%;
            margin: 0 auto 4.9rem;
        }

        .heading {
            text-align: center;
        }
    }

    .intro__body {
        > ul {
            font-size: 0;
            display: flex;
            justify-content: center;
            margin: 0 calc(50% - 62.2vw) 0 calc(50% - 59.6vw);

            ${breakpoints().max("xxl")} {
                margin: 0 calc(50% - 68.9vw) 0 calc(50% - 69.2vw);
            }

            ${breakpoints().max("l")} {
                margin: 0 calc(50% - 86.4vw) 0 calc(50% - 83vw);
            }

            ${breakpoints().max("m")} {
                margin: 0 calc(50% - 100vw) 0 calc(50% - 93.3vw);
            }

            img {
                height: auto;
            }

            > li {
                &:first-child {
                    text-align: right;
                    display: inline-flex;
                    flex-direction: column;
                    align-items: flex-end;

                    ul {
                        display: inline-grid;
                        grid-template-columns: auto auto;
                        column-gap: 2rem;
                        row-gap: 1.8rem;

                        ${breakpoints().max("xxl")} {
                            column-gap: 1.68rem;
                            row-gap: 1.68rem;
                        }

                        ${breakpoints().max("xl")} {
                            column-gap: 1.1rem;
                            row-gap: 1.1rem;
                        }

                        ${breakpoints().max("m")} {
                            column-gap: 0.6rem;
                            row-gap: 0.6rem;
                        }

                        &:first-child {
                            max-width: 84%;
                        }

                        li {
                            &:nth-child(1) .animate__inner,
                            &:nth-child(3) .animate__inner {
                                transform:translate(-10rem, 10rem);
                            }
                        }
                    }

                    > .animate {
                        margin-top: 4.1rem;

                        ${breakpoints().max("xxl")} {
                            margin-top: 3.5rem;
                        }

                        ${breakpoints().max("l")} {
                            margin-top: 2.24rem;
                        }

                        ${breakpoints().max("m")} {
                            margin-top: 1.24rem;
                        }
                    }
                }

                &:last-child {
                    margin-left: 4.1rem;
                    text-align: left;

                    ${breakpoints().max("xxl")} {
                        margin-left: 3.48rem;
                    }

                    ${breakpoints().max("l")} {
                        margin-left: 2.22rem;
                    }

                    ${breakpoints().max("m")} {
                        margin-left: 1.2rem;
                    }

                    > ul {
                        display: inline-grid;
                        grid-template-columns: auto;
                        column-gap: 4rem;
                        row-gap: 3.5rem;

                        ${breakpoints().max("xxl")} {
                            column-gap: 3.4rem;
                            row-gap: 3rem;
                        }

                        ${breakpoints().max("l")} {
                            row-gap: 2.2rem;
                        }

                        ${breakpoints().max("m")} {
                            row-gap: 1.2rem;
                        }

                        > li {
                            &:first-child {
                                max-width: 87%;
                            }
                        }

                        ul {
                            display: flex;

                            li {
                                + li {
                                    margin-left: 4rem;

                                    .animate__inner {
                                        transform:translate(10rem, 10rem);
                                    }

                                    ${breakpoints().max("xxl")} {
                                        margin-left: 3.4rem;
                                    }

                                    ${breakpoints().max("l")} {
                                        margin-left: 2.2rem;
                                    }

                                    ${breakpoints().max("m")} {
                                        margin-left: 1.2rem;
                                        // margin-top:10.7rem;
                                    }
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

    return (
        <Container>
            <IntroWrapper>
                <div className="intro__head">
                    <AnimateElement>
                        <BlockHead>
                            <Headline
                                size="large"
                                smallDeskSize="medium"
                                tabletSize="small"
                                mobileSize="small">
                                {t("intro-text")}
                            </Headline>
                        </BlockHead>
                    </AnimateElement>
                </div>

                <div className="intro__body">
                    <ul>
                        <li>
                            <ul>
                                <li>
                                    <AnimateElement>
                                        <Image
                                            src="/cards/card-1.png"
                                            width={390}
                                            height={199}
                                            alt="img"
                                        />
                                    </AnimateElement>
                                </li>

                                <li>
                                    <AnimateElement>
                                        <Image
                                            src="/cards/card-2.png"
                                            width={390}
                                            height={199}
                                            alt="img"
                                        />
                                    </AnimateElement>
                                </li>

                                <li>
                                    <AnimateElement>
                                        <Image
                                            src="/cards/card-3.png"
                                            width={390}
                                            height={199}
                                            alt="img"
                                        />
                                    </AnimateElement>
                                </li>

                                <li>
                                    <AnimateElement>
                                        <Image
                                            src="/cards/card-4.png"
                                            width={390}
                                            height={199}
                                            alt="img"
                                        />
                                    </AnimateElement>
                                </li>
                            </ul>

                            <AnimateElement>
                                <Image
                                    src="/cards/card-5.png"
                                    width={960}
                                    height={102}
                                    alt="img"
                                />
                            </AnimateElement>
                        </li>

                        <li>
                            <ul>
                                <li>
                                    <AnimateElement>
                                        <Image
                                            src="/cards/card-6.png"
                                            width={1170}
                                            height={132}
                                            alt="img"
                                        />
                                    </AnimateElement>
                                </li>

                                <li>
                                    <ul>
                                        <li>
                                            <AnimateElement>
                                                <Image
                                                    src="/cards/card-7.png"
                                                    width={420}
                                                    height={594}
                                                    alt="img"
                                                />
                                            </AnimateElement>
                                        </li>

                                        <li>
                                            <AnimateElement>
                                                <Image
                                                    src="/cards/card-8.png"
                                                    width={896}
                                                    height={485}
                                                    alt="img"
                                                />
                                            </AnimateElement>
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
