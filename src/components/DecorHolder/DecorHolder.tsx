/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import classNames       from 'classnames';

import { DecorBlob } from "../DecorBlob/DecorBlob";

const DecorWrapper = styled.div`
	position:relative;

	.decor__bg {
		position: absolute;
		top: 65%;
		left: 0;
		transform: translate(-50%,-50%);
		width:70%;
		opacity:0.3;
		pointer-events:none;

		> div {
			max-width:100%;
		}
	}

	.decor__inner {
		position:relative;
		z-index:2;
	}

	&.right {
		.decor__bg {
			left:auto;
			top:56%;
			right:10%;
			width:71%;
			transform: translate(50%,-50%);
		}
	}

	&.big {
		.decor__bg {
			right:17%;
			top:79%;
			width:90%;
		}
	}
`;

type Props = {
	children: | JSX.Element | JSX.Element[] | string | string[];
	position?: string;
	size?: string;
};

export const DecorHolder: React.FC<Props> = ({ children, position, size }) => {
    return (
    	<DecorWrapper className={classNames('decor', { "right": position=="right", "big": size=="big" })}>
    		<div className="decor__bg">
    			<DecorBlob/>
    		</div>

    		<div className="decor__inner">
    			{children}
    		</div>
    	</DecorWrapper>
    );
};
