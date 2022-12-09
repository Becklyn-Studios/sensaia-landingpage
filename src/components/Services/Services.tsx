/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { Headline } from "../Headline/Headline";
import { Paragraph } from "../Paragraph/Paragraph";

const ServicesWrapper = styled.div`
    color:white;
    width:100%;
`;

const ServicesInner = styled.div`
    position:relative;
    background: #143756;
    border: 1px solid #3F5E79;
    border-radius: 10px;
    padding:60px 20px 20px;
`;

const ServicesMedia = styled.div`
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

export const Services: React.FC<Props> = ({ icon, title, text }) => {
    return (
    	<ServicesWrapper className="services">
    		<ServicesInner className="services__inner">
    			<ServicesMedia className="services__media">
    				<Image src={icon} width={0} height={0} alt="icon" />
    			</ServicesMedia>

                <div className="services__content">
                    <Headline size="small">{title}</Headline>
                    <Paragraph size="copyText">{text}</Paragraph>
                </div>
    		</ServicesInner>
    	</ServicesWrapper>
    );
};
