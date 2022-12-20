/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import { breakpoints } from "@css/helper/breakpoints";

const SpacerWrapper = styled.div`
    margin:45rem 0;
    
    ${breakpoints().max("xxl")} {
        margin:35rem 0;

    }
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
