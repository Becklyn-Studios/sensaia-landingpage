/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import classNames       from 'classnames';

const NavTriggerWrapper = styled.div`
    position: relative;
    z-index:13;
    display: inline-block;
    width: 2.1rem;
    height: 1.9rem;
    color: ${p => p.theme.colors.white};
     
    span {
        position: absolute; 
        display: block; 
        height: 0.2rem; 
        width: 100%; 
        background: currentcolor; 
        transition: top .2s .25s, opacity .2s .25s, transform .2s 0s; 

        &:nth-child(1) { top: 0; }
        &:nth-child(2) { top: 50%; transform:translateY(-50%) }
        &:nth-child(3) { top: 100%; transform:translateY(-100%) }
    }

    &.is-active span {
        transition: background .2s, top .2s, opacity .2s, transform .2s .25s;
            
        &:nth-child(2) { opacity: 0; }
        &:nth-child(1) { top: 50%; transform: translateY(-50%) rotate(45deg); }
        &:nth-child(3) { top: 50%; transform: translateY(-50%) rotate(-45deg); }
    }
`;

type PropType = {
    isNavOpen:boolean
    setIsNavOpen:Function
 }
export const NavTrigger: React.FC<PropType> = ({ isNavOpen, setIsNavOpen }) => {
    
    const handleClick = () => {
        setIsNavOpen(!isNavOpen)
    };

    return (
        <NavTriggerWrapper className={classNames('nav-trigger', { "is-active": isNavOpen })} onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
        </NavTriggerWrapper>
    );
};


            
