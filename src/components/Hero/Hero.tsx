/**
 * External dependencies
 */
import React, {useEffect} from "react";
import styled from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "next-i18next";

/**
 * Internal dependencies
 */
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Headline } from "../Headline/Headline";
import { DecorBlob } from "../DecorBlob/DecorBlob";

const HeroWrapper = styled.div`
    position:relative;
    padding:31.8rem 0 28.9rem;
    margin-bottom:16rem;

    .hero__decor {
        position: absolute;
        z-index:1;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width:100%;
        max-width: 63.3rem;
    }
`;

const HeroContentWrapper = styled.div`
    position: relative;
    z-index:2;
    max-width: 94rem;
    margin:0 auto;
    text-align:center;

    .button {
        margin-top:3.1rem;
    }
`;

export const Hero: React.FC<{}> = () => {
    const { t } = useTranslation("common");

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Container>
            <HeroWrapper data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                <div className="hero__decor" >
                    <DecorBlob/>
                </div>

                <HeroContentWrapper data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <Headline size="xxlarge">{t("hero.text")}</Headline>

                    <Button href="#">{t("hero.button")}</Button>
                </HeroContentWrapper>
            </HeroWrapper>
        </Container>
    );
};
