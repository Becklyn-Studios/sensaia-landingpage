/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

import { useTranslation } from "next-i18next";

/**
 * Internal dependencies
 */
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Headline } from "../Headline/Headline";
import { DecorBlob } from "../DecorBlob/DecorBlob";

const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    max-width: 942px;
    margin: auto;
    margin-bottom:8.1rem;

    .hero__decor {
        width:100%;
    }
`;

const HeroContentWrapper = styled.div`
    position: absolute;
    z-index:2;
    left: 0;
    right: 0;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;

    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

export const Hero: React.FC<{}> = () => {
    const { t } = useTranslation("common");

    return (
        <Container>
            <HeroWrapper>
                <div className="hero__decor">
                    <DecorBlob/>
                </div>

                <HeroContentWrapper>
                    <Headline size="xxlarge">{t("hero.text")}</Headline>

                    <Button href="#">{t("hero.button")}</Button>
                </HeroContentWrapper>
            </HeroWrapper>
        </Container>
    );
};
