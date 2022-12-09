/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

const SpacerWrapper = styled.div`
    margin:45rem 0;
`;


type Props = {
	children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
};

export const Spacer: React.FC<Props> = ({children}) => {
    return (
    	<SpacerWrapper className="Spacer">
    		{children}
    	</SpacerWrapper>
    );
};
