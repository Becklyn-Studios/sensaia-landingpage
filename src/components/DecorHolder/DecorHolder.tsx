/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import classNames       from 'classnames';
import { breakpoints } from "@css/helper/breakpoints";

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

		${breakpoints().max("l")} {
			top: 50%;
			width:141%;
			transform: translate(-64%,-50%);
		}

		${breakpoints().max("m")} {
			top: 32%;
			width:128%;
		}

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

			${breakpoints().max("l")} {
				top: 52.5%;
				width:100.8%;
				transform: translate(33.6%,-50%);
			}

			${breakpoints().max("m")} {
				top: 58.2%;
				width:200.8%;
				transform: translate(69%,-50%);
			}
		}

		&.big {
			.decor__bg {
				right:17%;
				top:79%;

				${breakpoints().max("l")} {
					top: 67.8%;
					transform: translate(55.5%,-50%);
				}

				${breakpoints().max("m")} {
					top:61.5%;
					transform: translate(68.5%,-50%);
				}
			}
		}
	}

	&.big {
		.decor__bg {
			width:90%;

			${breakpoints().max("l")} {
				width:134.8%;
			}

			${breakpoints().max("m")} {
				width:270%;
			}
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
