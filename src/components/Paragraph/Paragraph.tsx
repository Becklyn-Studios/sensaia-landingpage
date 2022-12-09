/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

import { text } from "@css/typography";

const paragraphVariants = {
    copyText: text("textMd", "regular"),
};

const ParagraphWrapper = styled.div<ParagraphProps>`
    color: ${p => p.theme.colors.white};

    ${p => paragraphVariants[p.size]};
`;

interface ParagraphProps {
    children: React.ReactNode;
    size: keyof typeof paragraphVariants;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children, size }) => {
    return <ParagraphWrapper size={size} className="paragraph">{children}</ParagraphWrapper>;
};
