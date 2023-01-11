/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { breakpoints } from "@css/helper/breakpoints";

const ListLinksWrapper = styled.div`
    font-family: "Sharp Grotesk DB Cyr 19";

    ul {
        list-style-type: none;
        display: inline-flex;
        align-items: center;
        flex-wrap: wrap;

        li {
            + li {
                margin-left: 4.3rem;

                ${breakpoints().max("l")} {
                    margin-left: 3.3rem;
                }
            }
        }
    }

    a {
        display: block;
        transition: color 0.3s;

        &:hover {
            color: ${p => p.theme.colors.yellow};
        }
    }
`;

export const ListLinks = () => {
    const { t } = useTranslation("common");

    const list = [
        {
            title: t("footer.menu.data-privacy"),
            link: t("footer.menu.data-privacy-link"),
        },
        {
            title: t("footer.menu.impressum"),
            link: t("footer.menu.impressum-link"),
        },
    ];

    return (
        <ListLinksWrapper className="list-logos">
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </ListLinksWrapper>
    );
};
