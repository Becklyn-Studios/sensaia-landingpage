/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

const BlockHeadWrapper = styled.div`
	.addition {
		&:not(:last-child) {
			margin-bottom: 0.3rem;
		}
	}

	.heading {
		&:not(:last-child) {
			margin-bottom: 3.1rem;
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
