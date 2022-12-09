/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

import { text } from "@css/typography";

const headlineVariants = {
    xxlarge: text("headlineXxl", "medium"),
    xlarge: text("headlineXl", "medium"),
    large: text("headlineLg", "medium"),
    medium: text("headlineMd", "medium"),
    small: text("headlineS", "medium"),
    xsmall: text("headlineXs", "medium"),
};

const HeadlineWrapper = styled.div<HeadlineProps>`
    color: ${p => p.theme.colors.white};

    ${p => headlineVariants[p.size]};
`;

interface HeadlineProps {
    children: React.ReactNode;
    size: keyof typeof headlineVariants;
}

export const Headline: React.FC<HeadlineProps> = ({ children, size }) => {
    return <HeadlineWrapper size={size} className="heading">{children}</HeadlineWrapper>;
};
