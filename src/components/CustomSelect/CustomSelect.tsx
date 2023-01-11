/**
 * External dependencies
 */
import React , { useState } from "react";
import classNames       from 'classnames';
import styled from "styled-components";
import { Listbox }  from '@headlessui/react'

const SelectWrapper = styled.div`
    --space-x: 3rem;
    --anim-duration: 0.3s;
    position:relative;

    .select__controls {
        position:relative;
    }

    button {
        color: #8194A5;
        width:100%;
        padding: 1.7rem 5rem 1.7rem var(--space-x);
        background: #233B50;
        border: 0.1rem solid ${p => p.theme.colors.blue3};
        border-radius: 0.8rem;
        font-size:1.6rem;
        font-weight:500;
        letter-spacing: -0.02em;
        transition: color var(--anim-duration), border-color var(--anim-duration), border-radius var(--anim-duration);

        &:after {
            content:'';
            position: absolute;
            top: 50%;
            right: 3.6rem;
            transform: translate(50%, -65%) rotate(45deg);
            width:1rem;
            height:1rem;
            border: 0.1rem solid ${p => p.theme.colors.white};
            border-width: 0 0.2rem 0.2rem 0;
            transition: transform var(--anim-duration);
        }
       
        &[aria-expanded=true] {
            border-bottom-left-radius:0;
            border-bottom-right-radius:0;
            border-color: ${p => p.theme.colors.blue};
            border-bottom-color: ${p => p.theme.colors.blue3}; 

            &:after {
                transform: translate(50%, -25%) rotate(45deg) scale(-1);

            }

            ~ ul {
                opacity:1;
                pointer-events:auto;
            }
        }
    }

    ul {
        position:absolute;
        z-index:2;
        top:100%;
        left:0;
        width:100%;
        padding:1rem 1rem;
        background: #233B50;
        border: 0.1rem solid ${p => p.theme.colors.blue};
        border-radius: 0 0 0.8rem 0.8rem;
        border-top: none;
        padding:1.7rem 0.95rem; 
        opacity:0;
        pointer-events:none;
        transition: opacity var(--anim-duration);

        li {
            padding:1rem 2rem;
            transition: background-color var(--anim-duration), box-shadow var(--anim-duration);
            border-radius:0.6rem;
            box-shadow: 0 0 0 rgba(0, 0, 0, 0.25);

            &:hover {
                background-color:${p => p.theme.colors.blue3};
                box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
            }
        }
    }


    &.has-value {
        button {
            color:${p => p.theme.colors.white};
        }
    }
    
    .select__hint {
        font-family: "Sharp Grotesk DB Cyr 19";
        margin-top:0.7rem;
        color:${p => p.theme.colors.error};
        font-weight:500;
    }

    &.error {
        button:not([aria-expanded=true]) {
            border-color:${p => p.theme.colors.error}
        }
    }
`;

type Props = {
    label: string,
    error: boolean,
    errorMessage: string,
    list: Array<string>,
    onChange: Function,
}

export const CustomSelect: React.FC<Props> = ({label, error, onChange, list, errorMessage}) => {
    const [value, setValue] = useState(label)
    const [hasValue, setHasValue] = useState(false);

    return (
        <SelectWrapper className={classNames('custom-select', { "error": error, "has-value": hasValue })}>
            <div className="select__controls">
                <Listbox
                    value={value}
                    onChange={(prop:string) => {
                        onChange(prop);
                        setValue(prop);
                        setHasValue(true)
                    }}
                    >
                    <Listbox.Button>{value}</Listbox.Button>
                    
                    <Listbox.Options static>
                        {list.map((value, index) => (
                            <Listbox.Option
                                key={index}
                                value={value}
                                >
                                {value}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox>
            </div>

            { error && <p className="select__hint">{errorMessage}</p> }
        </SelectWrapper>
    );
};
