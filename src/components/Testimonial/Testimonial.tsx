/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import { Headline } from "../Headline/Headline";
import { breakpoints } from "@css/helper/breakpoints";

const TestimonialWrapper = styled.div`
    background: #143756;
    border: 0.1rem solid #3F5E79;
    border-radius: 1.2rem;
    padding: 7rem 7rem;
    min-height:39.2rem;
    display:flex;
    flex-direction:column;

    ${breakpoints().max("m")} {
        padding: 4rem 2.8rem 4.6rem;
    }

    .heading {
        margin-bottom:2;

        &:before,
        &:after{
            content: open-quote;
        }

        &:after{
            content: close-quote;
        }
    }

    p {
        font-size:1.6rem;
        margin-top:auto;
        color:#06DEEB;
        font-weight:500;
        letter-spacing: -0.02em;
    }
`;


type Props = {
    comment : string,
    author : string
};

export const Testimonial: React.FC<Props> = ({ comment, author }) => {
    return (
        <TestimonialWrapper>
            <Headline size="small" smallDeskSize="small" tabletSize="small" mobileSize="small">{comment}</Headline>
            <p>{author}</p>
        </TestimonialWrapper>
    );
};
