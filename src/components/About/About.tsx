/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { Headline } from "../Headline/Headline";

const FeatureWrapper = styled.div`
    color:white;
    width:100%;
`;

const FeatureInner = styled.div`
    position:relative;
    background: #143756;
    border: 1px solid #3F5E79;
    border-radius: 10px;
    padding:60px 20px 20px;
`;

const FeatureMedia = styled.div`
    position:absolute;
    top:0;
    left:50%;
    transform:translate(-50%, -50%);
    width:74px;
    height:74px;
    background-color:white;
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
    	<FeatureWrapper className="Feature">
    		<FeatureInner className="Feature__inner">
    			<FeatureMedia className="Feature__media">
    				<Image src={icon} width={0} height={0} alt="icon" />
    			</FeatureMedia>

                <div className="Feature__content">
                    { !!title && <Headline size="small">{title}</Headline>}
                    <p>{text}</p>
                </div>
    		</FeatureInner>
    	</FeatureWrapper>
    );
};
