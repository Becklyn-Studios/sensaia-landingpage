/**
 * External dependencies
 */
import React, { AnchorHTMLAttributes, PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";
import styled from "styled-components";

const MenuItemWrapper = styled.div`
    position: relative;
    color: ${p => p.theme.colors.white};

    ::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        bottom: -5px;
        left: 0;
        background-color: ${p => p.theme.colors.white};
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }

    &:hover:before {
        transform: scaleX(1);
    }
`;

interface MenuItemProps
    extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
        Pick<LinkProps, "href" | "shallow"> {}

const MenuItem: React.FC<PropsWithChildren<MenuItemProps>> = ({ children, href, ...rest }) => {
    return (
        <Link href={href} passHref legacyBehavior>
            <MenuItemWrapper as="a" {...rest}>
                {children}
            </MenuItemWrapper>
        </Link>
    );
};

export default MenuItem;
