/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import Image from "next/image";

const ListLogosWrapper = styled.div`
    ul {
        list-style-type:none;
        display:inline-flex;
        align-items:flex-start;;
        flex-wrap: wrap;

        li {
            + li {
                margin-left:3.9rem;
            }
        }
    }

    a {
        display:block;
        transition: transform 0.3s;

        &:hover {
            transform:scale(1.05);
        }
    }
`;


export const ListLogos = () => {
    const list = [
        {
          "img": <Image src="/logos/logo-sensaia.svg" width={105.37} height={16.15} alt="logo" />,
          "link": "#"
        },
        {
          "img": <Image src="/logos/logo-steag.svg" width={66} height={20} alt="logo" />,
          "link": "#"
        },
        {
          "img": <Image src="/logos/logo-sens.png" width={64} height={25} alt="logo" />,
          "link": "#"
        }
    ]

    return (
    	<ListLogosWrapper className="list-logos">
            <ul>
                {
                    list.map((item, index) => (
                        <li key={index}>
                            <a href={item.link}>
                                {item.img}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </ListLogosWrapper>
    );
};
