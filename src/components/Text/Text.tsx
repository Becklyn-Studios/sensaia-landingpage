/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

const TextWrapper = styled.div<TextProps>`
    color: ${p => p.theme.colors.white};
`;

interface TextProps {
    children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ children }) => {
    return <TextWrapper>{children}</TextWrapper>;
};
