/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import classNames from "classnames";
import { breakpoints } from "@css/helper/breakpoints";

import { Headline } from "../Headline/Headline";

const FeatureMedia = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8rem;
    height: 8rem;
    background-color: ${p => p.theme.colors.white};
    border-radius: 50%;

    ${breakpoints().max("l")} {
        width: 6.8rem;
        height: 6.8rem;
    }

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 70%;
        width: auto;
        height: auto;
    }
`;

const FeatureWrapper = styled.div`
    color: ${p => p.theme.colors.white};
    width: 100%;
    height: 100%;
    text-align: center;

    .feature__inner {
        position: relative;
        background: #143756;
        border: 0.1rem solid #3f5e79;
        border-radius: 1rem;
        padding: 8rem 2rem 5.2rem;
        height: 100%;

        ${breakpoints().max("xl")} {
            padding: 6rem 2rem 4rem;
        }

        ${breakpoints().max("l")} {
            padding: 6.5rem 3rem 4.3rem;
        }

        ${breakpoints().max("m")} {
            padding: 6.5rem 3.2rem 4.3rem;
        }
    }

    .feature__content {
        max-width: 36rem;
        margin: 0 auto;

        .heading {
            &:not(:last-child) {
                margin-bottom: 2.1rem;

                ${breakpoints().max("l")} {
                    margin-bottom: 0.8rem;
                }
            }
        }

        p {
            &:first-child:last-child {
                max-width: 29rem;
                margin: 0 auto;
            }
        }
    }

    &.feature--no-icon {
        .feature__inner {
            padding: 5.3rem 3rem 5rem;

            ${breakpoints().max("xxl")} {
                padding: 4.2rem 3rem 4rem;
            }

            ${breakpoints().max("l")} {
                padding: 4rem 3rem 4.2rem;
            }

            .heading:not(:last-child) {
                margin-bottom: 1.5rem;
                white-space: pre-wrap;

                ${breakpoints().max("xl")} {
                    margin-bottom: 1.8rem;
                }

                ${breakpoints().max("l")} {
                    margin-bottom: 1.4rem;
                }
            }

            .feature__content {
                ${breakpoints().max("l")} {
                    max-width: 94%;
                }
            }
        }
    }

    &.feature--no-heading {
        .feature__inner {
            ${breakpoints().max("xxl")} {
                padding: 6.3rem 2rem 4.5rem;
            }

            ${breakpoints().max("l")} {
                padding: 5.5rem 3rem 3.3rem;
            }
        }

        .feature__media {
            ${breakpoints().max("xxl")} {
                width: 7.4rem;
                height: 7.4rem;
            }
        }
    }
`;

type Props = {
    icon: string;
    title: string;
    text: string;
};

export const Feature: React.FC<Props> = ({ icon, title = "", text }) => {
    return (
        <FeatureWrapper
            className={classNames("feature", {
                "feature--no-icon": !!!icon,
                "feature--no-heading": !!!title,
            })}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
            <div className="feature__inner">
                {!!icon && (
                    <FeatureMedia className="feature__media">
                        <Image src={icon} width={0} height={0} alt="icon" />
                    </FeatureMedia>
                )}

                <div className="feature__content">
                    {!!title && (
                        <Headline
                            size="small"
                            smallDeskSize="small"
                            tabletSize="xsmall"
                            mobileSize="xsmall">
                            {title}
                        </Headline>
                    )}
                    <p>{text}</p>
                </div>
            </div>
        </FeatureWrapper>
    );
};
