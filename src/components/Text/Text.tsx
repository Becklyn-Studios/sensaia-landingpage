/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

import { text } from "@css/typography";

const TextWrapper = styled.div<TextProps>`
    color: ${p => p.theme.colors.white};

    ${p => TextVariants[p.size]};
`;

interface TextProps {
    children: React.ReactNode;
    // size: keyof typeof TextVariants;
}

export const Text: React.FC<TextProps> = ({ children }) => {
    return <TextWrapper size={size}>{children}</TextWrapper>;
};
