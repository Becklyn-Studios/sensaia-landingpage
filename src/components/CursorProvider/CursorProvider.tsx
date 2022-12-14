/**
 * External dependencies
 */
import React, { useEffect , useState } from "react";
import styled from "styled-components";
import { breakpoints } from "@css/helper/breakpoints";

const CursorWrapper = styled.div`
    --cursor-size: 5rem;

    position: absolute;
    z-index:14;
    top: var(--mouse-top);
    left: min(calc(100vw - (var(--cursor-size)/2)), var(--mouse-left));
    transform: translate(-50%,-50%);
    width:var(--cursor-size);
    height:var(--cursor-size);
    background-color: ${p => p.theme.colors.yellow};
    border: 0.4rem solid ${p => p.theme.colors.yellow};
    border-radius:50%;
    pointer-events:none;
    opacity: 0;
    transition: width 0.3s, height 0.3s, background-color 0.3s, opacity 0.3s;

    ${breakpoints().max("l")} {
        display:none;
    }

    &.A,
    &.BUTTON,
    &.INPUT{
        --cursor-size:10rem;
        background-color:transparent;
        opacity: 1;
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


            
