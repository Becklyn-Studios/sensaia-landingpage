import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const LinkWrapper = styled.button`
   
`;

type Props = {
    children: React.ReactNode;
    id: string;
    setIsNavOpen:Function;
};

export const MenuLink: React.FC<Props> = ({children, id, setIsNavOpen}) => {
    const router = useRouter();
    
    const handleClick = () => {
        setIsNavOpen(false);
    };

    return (
        <LinkWrapper>
            <Link locale={router.locale} scroll={false} href={id} onClick={handleClick} >
                {children}
            </Link>
        </LinkWrapper>
    );
};
