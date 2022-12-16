/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import classNames       from 'classnames';

const PagingWrapper = styled.div`
    ul {
        display:flex;
        flex-direction:column;
        align-items:flex-end;
        list-style-type:none;

        li {
            display:inline-block;
            width: 0.2rem;
            height: 2.6rem;
            background-color: ${p => p.theme.colors.blue3};

            &.is-active {
                background-color: ${p => p.theme.colors.white};
            }

            + li {
                margin-top: 1.5rem;
            }
        }
    }
`;


type Props = {
    list: Array<object>,
    index: Number,
};

export const Paging: React.FC<Props> = ({list, index}) => {
    return (
    	<PagingWrapper className="paging">
            <ul>
        		{
                    list.map((item, inx) => (
                        <li key={inx} className={classNames({ "is-active": inx == index })}>
                            { false && item}
                        </li>
                    ))
                }
            </ul>
    	</PagingWrapper>
    );
}; 
