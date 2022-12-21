/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import { breakpoints } from "@css/helper/breakpoints";

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

    ${breakpoints().max("xl")} {
        ${p => headlineVariants[p.smallDeskSize]};
    }

    ${breakpoints().max("l")} {
        ${p => headlineVariants[p.tabletSize]};
    }

    ${breakpoints().max("m")} {
        ${p => headlineVariants[p.mobileSize]};
    }
`;

interface HeadlineProps {
    children: React.ReactNode;
    size: keyof typeof headlineVariants;
    smallDeskSize: keyof typeof headlineVariants;
    tabletSize: keyof typeof headlineVariants;
    mobileSize: keyof typeof headlineVariants;
}

export const Headline: React.FC<HeadlineProps> = ({ children, size, smallDeskSize, tabletSize, mobileSize }) => {
    return <HeadlineWrapper size={size} smallDeskSize={smallDeskSize} tabletSize={tabletSize} mobileSize={mobileSize} className="heading">{children}</HeadlineWrapper>;
};
