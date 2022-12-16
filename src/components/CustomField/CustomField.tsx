/**
 * External dependencies
 */
import React , { useState } from "react";
import classNames       from 'classnames';
import styled from "styled-components";

const FieldWrapper = styled.div`
    --space-x: 3rem;

    .field__control {
        position:relative;

        label {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate(0,-50%);
            padding: 0 var(--space-x);
            color: #8194A5;
            pointer-events:none;
            font-size:1.6rem;
            font-weight:500;
            transition: transform 0.3s, font-size 0.3s;
            max-width:calc(100% - 5rem);
            overflow:hidden;
            overflow-text:elipses;
        }

        input {
            color: #fff;
            width:100%;
            padding: 2.45rem 5rem 0.95rem var(--space-x);
            background: #233B50;
            border: 0.1rem solid #3F5E79;
            border-radius: 0.8rem;
            font-size:1.6rem;
            font-weight:500;
            letter-spacing: -0.02em;
            transition: border-color 0.3s;
        }

        svg {
            position: absolute;
            top: 48%;
            right: 3.2rem;
            transform: translate(50%,-50%);
            opacity:0;
            transition: opacity 0.3s;
        }
    }

    .field__hint {
        font-family: "Sharp Grotesk DB Cyr 19";
        margin-top:0.7rem;
        color:#EC076A;
        font-weight:500;
    }


    //Move Label
    input:focus ~ ,
    &.has-value {
        label {
            transform: translate(0, calc(-50% - 1rem));
            font-size:1.2rem;
        }
    }

    input:focus {
        border-color: #06DEEB;
    }

    &.error {
        input {
            border-color:${p => p.theme.colors.error};
        }
    }
    
    &.has-value:not(.error) {
        .field__control {
            &:after {
                opacity:1;
            }
        }

        input:not(:focus) ~ svg {
            opacity:1;
        }
    }

    &.required {
        label {
            &:after {
                content:'*';
            }
        }
    }
`;

type Props = {
    label: string,
    error: boolean,
    onChange: Function,
}

export const CustomField: React.FC<Props> = ({label, error, onChange}) => {
    const [hasValue, setHasValue] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
        onChange(event)
        setHasValue(!!(event.target as HTMLInputElement).value)
    }

    return (
        <FieldWrapper className={classNames('field-holder required', { "error": error, "has-value": hasValue })}>
            <div className="field__control">
                <input className="field" onChange={handleChange} />
                <label className="field__label">{label}</label>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#FFED00" strokeWidth="2" strokeLinecap="square"/>
                </svg>
            </div>

            { error && <p className="field__hint">Error: This is a required field.</p> }
        </FieldWrapper>
    );
};
