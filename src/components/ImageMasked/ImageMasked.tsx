/**
 * External dependencies
 */
import React ,{ useRef, useState, useEffect } from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
    position:relative;


    img {
        &:first-child{
            filter: grayscale(1);
        }

        + img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity:0;
            clip-path: circle(10rem at calc(var(--mouse-left) - var(--offset-x)) calc(var(--mouse-top) - var(--offset-y)));
            transition: opacity 0.3s;
        }

        &:hover {
            &:last-child {
                opacity:1;
            }
        }
    }
`;

type Props = {
    children: React.ReactNode,
}

export const ImageMasked: React.FC<Props> = ({children}) => {
    const boxRef = useRef<HTMLDivElement>(null);
    const [x, setX] = useState<number | null>();
    const [y, setY] = useState<number | null>();

    const getPosition = () => {
        if (boxRef.current?.getBoundingClientRect()) {
            const x = boxRef.current?.getBoundingClientRect().left;
            setX(x);

            const y = boxRef.current?.getBoundingClientRect().top + window.scrollY;
            setY(y);
        }

        const timer = setTimeout(() => {
            getPosition();
        }, 500);
        return () => clearTimeout(timer);
    };

    useEffect(() => {
        getPosition();
        window.addEventListener("resize", getPosition);

        return () => window.removeEventListener("resize", getPosition);
    }, []);

    return (
        <ImageWrapper ref={boxRef} style={{ "--offset-x":`${x}px`, "--offset-y":`${y}px` } as React.CSSProperties}>
            {children}
            {children}
        </ImageWrapper>
    );
};
