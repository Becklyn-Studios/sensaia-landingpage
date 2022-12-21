/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import { breakpoints } from "@css/helper/breakpoints";

const BlockHeadWrapper = styled.div`
	.addition {
		&:not(:last-child) {
			margin-bottom: 0.3rem;

		    ${breakpoints().max("m")} {
				margin-bottom: 0.5rem;
		    }
		}
	}

	.heading {
		&:not(:last-child) {
			margin-bottom: 3.1rem;

		    ${breakpoints().max("m")} {
				margin-bottom: 1.7rem;
		    }
		}
	}

	p {
		color:inherit;
		&:not(:last-child) {
			margin-bottom: 1.5rem;
		}
	}
`;

type Props = {
	children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
};

export const BlockHead: React.FC<Props> = ({ children }) => {
    return (
    	<BlockHeadWrapper>
    		{children}
    	</BlockHeadWrapper>
    );
};
