/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import classNames       from 'classnames';
import { breakpoints } from "@css/helper/breakpoints";

import { Headline } from "../Headline/Headline";

const FeatureWrapper = styled.div`
    color: ${p => p.theme.colors.white};
    width:100%;
    height:100%;
    text-align:center;

    .feature__inner {
        position:relative;
        background: #143756;
        border: 0.1rem solid #3F5E79;
        border-radius: 1rem;
        padding: 8rem 2rem 5.2rem;
        height:100%;
    }

    .feature__content {
        max-width:36rem;
        margin:0 auto;

        .heading {
            &:not(:last-child) {
                margin-bottom:2.1rem;
            }
        }

        p {
            &:first-child:last-child {
                max-width:29rem;
                margin:0 auto;
            }
        }
    }
   
    &.feature--no-icon {
        .feature__inner {
            padding:5.3rem 3rem 5rem;

            ${breakpoints().max("xxl")} {
                padding:4.2rem 3rem 5rem;
            }

            .heading:not(:last-child) {
                margin-bottom: 1.5rem;

                ${breakpoints().max("xxl")} {
                    margin-bottom: 1.8rem;

                }
            }
        }
    }
`;

const FeatureMedia = styled.div`
    position:absolute;
    top:0;
    left:50%;
    transform:translate(-50%, -50%);
    width:8rem;
    height:8rem;
    background-color:${p => p.theme.colors.white};
    border-radius:50%;

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        max-width:70%;
        width:auto;
        height:auto;
    }
`;

type Props = {
    icon : string,
    title : string,
    text : string,
};

export const Feature: React.FC<Props> = ({ icon, title = "", text }) => {
    return (
    	<FeatureWrapper className={classNames('feature', { "feature--no-icon": !!!icon })}>
    		<div className="feature__inner">
    			{ !!icon &&
                    <FeatureMedia className="feature__media">
    				    <Image src={icon} width={0} height={0} alt="icon" />
    			    </FeatureMedia>
                }

                <div className="feature__content">
                    { !!title && <Headline size="small">{title}</Headline>}
                    <p>{text}</p>
                </div>
    		</div>
    	</FeatureWrapper>
    );
};
