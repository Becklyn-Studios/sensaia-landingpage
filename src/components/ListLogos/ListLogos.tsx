/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { breakpoints } from "@css/helper/breakpoints";
import useMedia           from "../UseMedia/UseMedia";


const ListLogosWrapper = styled.div`
    ul {
        list-style-type:none;
        display:inline-flex;
        align-items:flex-start;;
        flex-wrap: wrap;

        ${breakpoints().max("m")} {
            align-items:flex-start;
            font-size:0;
        }

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
    const isTabletView = useMedia(1024)

    const list = [
        {
          "img": <Image src="/logos/logo-sensaia.svg" width={105.37} height={16.15} alt="logo" />,
          "imgTablet": <Image src="/logos/logo-sensaia.svg" width={89} height={14} alt="logo" />,
          "link": "#"
        },
        {
          "img": <Image src="/logos/logo-steag.svg" width={66} height={20} alt="logo" />,
          "imgTablet": <Image src="/logos/logo-steag.svg" width={58.9} height={18.39} alt="logo" />,
          "link": "#"
        },
        {
          "img": <Image src="/logos/logo-sens.png" width={64} height={25} alt="logo" />,
          "imgTablet": <Image src="/logos/logo-sens.png" width={54} height={21} alt="logo" />,
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
                                {
                                    isTabletView.isMobile
                                    ? item.imgTablet
                                    : item.img
                                }
                            </a>
                        </li>
                    ))
                }
            </ul>
        </ListLogosWrapper>
    );
};
