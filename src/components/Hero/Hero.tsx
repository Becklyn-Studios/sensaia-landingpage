/**
 * External dependencies
 */
import React from "react";
import Image from "next/image";
import styled from "styled-components";

import { useTranslation } from "next-i18next";

/**
 * Internal dependencies
 */
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Headline } from "../Headline/Headline";

const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    max-width: 942px;
    margin: auto;
`;

const HeroContentWrapper = styled.div`
    position: absolute;
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
                <Image src="/blob.png" width={942} height={920} alt="Blob" />

                <HeroContentWrapper>
                    <Headline size="xxlarge">{t("hero.text")}</Headline>

                    <Button href="#">{t("hero.button")}</Button>
                </HeroContentWrapper>
            </HeroWrapper>
        </Container>
    );
};
