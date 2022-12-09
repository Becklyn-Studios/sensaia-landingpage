/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

const BlockHeadWrapper = styled.div`
	.heading {
		&:not(:last-child) {
			margin-bottom: 3.4rem;
		}
	}

	.paragraph {
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
