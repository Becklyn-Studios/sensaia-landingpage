/**
 * External dependencies
 */
import React, { useEffect , useState } from "react";
import styled from "styled-components";
import { breakpoints } from "@css/helper/breakpoints";

const CursorWrapper = styled.div`
    --cursor-size: 5rem;

    position: absolute;
    z-index:10;
    top: var(--mouse-top);
    left: var(--mouse-left);
    transform: translate(-50%,-50%);
    width:var(--cursor-size);
    height:var(--cursor-size);
    background-color: ${p => p.theme.colors.yellow};
    border: 0.4rem solid ${p => p.theme.colors.yellow};
    border-radius:50%;
    pointer-events:none;
    transition: width 0.3s, height 0.3s, background-color 0.3s;

    ${breakpoints().max("l")} {
        display:none;
    }

    &.A,
    &.BUTTON,
    &.INPUT,
    &.IMG {
        --cursor-size:15rem;
        background-color:transparent;
    }

    &.IMG {
        width:20rem;
        height:20rem;
    }
`;


interface IProps {
    setMousePositionX: React.Dispatch<React.SetStateAction<number>>;
    setMousePositionY: React.Dispatch<React.SetStateAction<number>>;
}

export const CursorProvider: React.FC<IProps> = ({setMousePositionX, setMousePositionY}) => {
    const [hoverType, setHoverType] = useState<string>();
    
    useEffect(() => {
        const mouseMove = (e: any): void => {
           setMousePositionX(e.pageX)
           setMousePositionY(e.pageY)
           setHoverType((e.target as HTMLElement).tagName);
        }
        
        document.addEventListener("mousemove", mouseMove);
        return () => {
            document.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    return (
        <CursorWrapper className={hoverType}></CursorWrapper>
    );
};


            
