/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import { breakpoints } from "@css/helper/breakpoints";

const Grid = styled.div`
    --guter-x : 2rem;
    --guter-y : 2rem;
    
    display:flex;
    flex-wrap: wrap;
    margin: calc(var(--guter-y) * -1) calc(var(--guter-x) * -0.5) 0;

    ${breakpoints().max("l")} {
        --guter-x : 1rem;
        --guter-y : 1rem;
    }
`;


type Props = {
    children: | JSX.Element | JSX.Element[];
};

export const Row: React.FC<Props> = ({ children }) => {
    return (
        <Grid className="row">
            {children}
        </Grid>
    );
};
