import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";
import styled from "styled-components";
import { text } from "@css/typography";
import { hover } from "@css/helper";

const ButtonWrapper = styled.button`
    border-radius: 6.25rem;
    background-color: ${p => p.theme.colors.yellow};
    padding: 15px 25px;
    color: ${p => p.theme.colors.blue2};
    ${text("textMd", "medium")};
    line-height: 1;

    ${p => hover`
        background-color: ${p.theme.colors.yellowLight};
    `}
`;

interface HTMLAnchorProps
    extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
        Pick<LinkProps, "href" | "shallow"> {
    as: "a";
    disabled?: boolean;
}

interface HTMLButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    as?: "button";
}

export type ButtonProps = HTMLButtonProps | HTMLAnchorProps;

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
    switch (props.as) {
        case "a": {
            const { as, href, ...rest } = props;
            return (
                <Link href={href} passHref legacyBehavior>
                    <ButtonWrapper as="a" {...rest}>
                        {children}
                    </ButtonWrapper>
                </Link>
            );
        }
        default: {
            const { as, ...rest } = props;
            return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
        }
    }
};
