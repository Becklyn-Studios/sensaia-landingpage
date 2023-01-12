import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useLocale } from "@lib/hook/useLocale";

const LinkWrapper = styled.button`
   
`;

type Props = {
    children: React.ReactNode;
    id: string;
    setIsNavOpen:Function;
};

export const MenuLink: React.FC<Props> = ({children, id, setIsNavOpen}) => {
    const { locale, isDefaultLocale } = useLocale();
    
    const handleClick = () => {
        setIsNavOpen(false);
    };

    return (
        <LinkWrapper>
            <Link scroll={false} href={isDefaultLocale ? `/#${id}` : `/${locale}#${id}`} onClick={handleClick} >
                {children}
            </Link>
        </LinkWrapper>
    );
};
