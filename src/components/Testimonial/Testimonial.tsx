/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import { Headline } from "../Headline/Headline";

const TestimonialWrapper = styled.div`
    background: #143756;
    border: 0.1rem solid #3F5E79;
    border-radius: 1.2rem;
    padding: 7rem 7rem;
    min-height:39.2rem;
    display:flex;
    flex-direction:column;

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
            <Headline size="small">{comment}</Headline>
            <p>{author}</p>
        </TestimonialWrapper>
    );
};
