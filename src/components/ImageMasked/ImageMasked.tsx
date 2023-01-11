/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
    position:relative;
`;

type Props = {
    children: React.ReactNode,
}

export const ImageMasked: React.FC<Props> = ({children}) => {
    return (
        <ImageWrapper>
            {children}
        </ImageWrapper>
    );
};
