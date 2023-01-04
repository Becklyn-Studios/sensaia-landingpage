/**
 * External dependencies
 */
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import classNames       from 'classnames';

const AnimateElementWrapper = styled.div<Props>`
    padding: var(--guter-y) calc(var(--guter-x) * 0.5) 0;
    width: 100%;

    .animate__inner {
    	transform:translateY(10rem);
    	opacity:0;
    	transition: transform 0.3s, opacity 0.3s;
    }

    &.animate .animate__inner {
    	transform:translateY(0);
    	opacity:1;
    }
`;

type Props = {
    children: React.ReactNode;
};

export const AnimateElement: React.FC<Props> = ({ children }) => {
	const [isAnimated, setIsAnimated] = useState(false);
	const ref = React.useRef<HTMLDivElement>(null);

	useEffect(() => {

	    const animate = () => {
	    	const element = ( ref?.current as HTMLElement );
	    	const offsetTop = element.getBoundingClientRect().top;
	    	const winWidth = window.innerHeight
	    	
	    	setIsAnimated(offsetTop < winWidth - 100)
	    }
	    
        animate();

	    document.addEventListener("scroll", animate);
        
	    return () => {
	        document.removeEventListener("scroll", animate);
	    };
	}, []);

    return (
    		<AnimateElementWrapper ref={ref} className={classNames({ "animate": isAnimated})}>
    			<div className="animate__inner">
    				{children}
    			</div>
    		</AnimateElementWrapper>
    	)
};


