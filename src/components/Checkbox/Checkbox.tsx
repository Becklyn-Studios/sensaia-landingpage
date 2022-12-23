import React from "react";
import classNames from "classnames";
import styled from "styled-components";
import { breakpoints } from "@css/helper/breakpoints";

const CheckboxWrapper = styled.div`
    .checkbox__holder {
        position: relative;
    }

    input {
        position: absolute;
        z-index: 2;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;

        &:checked ~ label:after {
            opacity: 1;
        }
    }

    label {
        position: relative;
        padding-left: 4rem;
        display: flex;
        align-items: center;
        min-height: 3rem;

        ${breakpoints().max("m")} {
            line-height: 1.25;
        }

        &:before,
        &:after {
            content: "";
            position: absolute;
            top: 50%;
            left: 1.5rem;
            transform: translate(-50%, -50%);
            width: 3rem;
            height: 3rem;
            pointer-events: none;
            background: #233b50;
            border: 1px solid #3f5e79;
            border-radius: 0.4rem;
            transition: border-color 0.3s;
        }

        &:after {
            margin-top: -0.2rem;
            width: 1.6rem;
            height: 0.9rem;
            border: 0.3rem solid currentcolor;
            transform: translate(-50%, -50%) rotate(-45deg);
            border-width: 0 0 0.3rem 0.3rem;
            border-radius: 0;
            opacity: 0;
            transition: opacity 0.15s;
        }
    }

    .checkbox__hint {
        color: ${p => p.theme.colors.error};
        margin-top: 1rem;
    }

    &.error {
        label {
            &:before {
                border-color: ${p => p.theme.colors.error};
            }
        }
    }
`;

type Props = {
    label: string;
    error: boolean;
    onChange: Function;
};

export const Checkbox: React.FC<Props> = ({ label, error, onChange }) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onChange(event);
        setChecked(!checked);
    };

    return (
        <CheckboxWrapper className={classNames("checkbox", { error: error })}>
            <div className="checkbox__holder">
                <input type="checkbox" checked={checked} onChange={handleChange} />
                <label> {label} </label>
            </div>

            {error && <p className="checkbox__hint">Error: This is a required field.</p>}
        </CheckboxWrapper>
    );
};
