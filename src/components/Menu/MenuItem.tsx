/**
 * External dependencies
 */
import React, { AnchorHTMLAttributes, PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";
import styled from "styled-components";

const MenuItemWrapper = styled.div`
    color: ${p => p.theme.colors.white};
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
