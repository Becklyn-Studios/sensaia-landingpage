/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

import { DecorBlob } from "../DecorBlob/DecorBlob";

const DecorWrapper = styled.div`
	position:relative;

	.decor__bg {
		position: absolute;
		top: 60%;
		left: 0;
		transform: translate(-50%,-50%);
		width:100%;
		opacity:0.3;
	}

	.decor__inner {
		position:relative;
		z-index:2;
	}
`;

type Props = {
	children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
};

export const DecorHolder: React.FC<Props> = ({ children }) => {
    return (
    	<DecorWrapper>
    		<div className="decor__bg">
    			<DecorBlob/>
    		</div>

    		<div className="decor__inner">
    			{children}
    		</div>
    	</DecorWrapper>
    );
};
