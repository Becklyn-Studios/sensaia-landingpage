import { CSSObject } from "styled-components";

const createTypeface = (
    fontSize: string,
    lineHeight: string | number,
    letterSpacing: string | number
): CSSObject => ({
    fontSize,
    lineHeight,
    letterSpacing,
});

//@todo adjust typefaces
export const typefaces = {
    // Headline
    headlineXxl: createTypeface("7.2rem", "7.6rem", "-0.02em"),
    headlineXl: createTypeface("6.2rem", "7.4rem", "-0.02em"),
    headlineLg: createTypeface("4.8rem", "5.6rem", "-0.02em"),
    headlineMd: createTypeface("3.8rem", "4.2rem", "-0.02em"),
    headlineS: createTypeface("2.4rem", "3.0rem", "-0.02em"),
    headlineXs: createTypeface("1.6rem", "2.4rem", "-0.02em"),

    textMd: createTypeface("1.6rem", "2.4rem", "-0.02em"),
    textAdd: createTypeface("1.6rem", "2.2rem", "-0.02em"),
} as const;

export type Typeface = keyof typeof typefaces;
