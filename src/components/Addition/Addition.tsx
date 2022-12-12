/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

import { text } from "@css/typography";

const AdditionVariants = {
    base:   text("textAdd", "medium"),
    // xlarge: text("headlineXl", "medium"),
    // large: text("headlineLg", "medium"),
    // medium: text("headlineMd", "medium"),
    // small: text("headlineS", "medium"),
    // xsmall: text("headlineXs", "medium"),
};

const AdditionWrapper = styled.div<AdditionProps>`
    color: ${p => p.theme.colors.blue};

    ${p => AdditionVariants[p.size]};
`;

interface AdditionProps {
    children: React.ReactNode;
    size: keyof typeof AdditionVariants;
}

export const Addition: React.FC<AdditionProps> = ({ children, size }) => {
    return <AdditionWrapper size={size} className="addition">{children}</AdditionWrapper>;
};
