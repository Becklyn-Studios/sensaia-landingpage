/**
 * External dependencies
 */
import React, {useEffect} from "react";
import styled from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "next-i18next";
import { breakpoints } from "@css/helper/breakpoints";

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

    ${breakpoints().max("xxl")} {
        padding: 32.1rem 0 28.9rem;
    }

    ${breakpoints().max("l")} {
        padding: 30.1rem 7rem 28.9rem;
        margin-bottom:9.1rem;
    }

    ${breakpoints().max("m")} {
        padding: 21rem 0rem;
        margin-bottom:4rem;
    }

    .hero__decor {
        position: absolute;
        z-index:1;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width:100%;
        max-width: 63.3rem;

        ${breakpoints().max("l")} {
            max-width: none;
            width:105%;
        }

        ${breakpoints().max("m")} {
            max-width: none;
            width:147.2%;
            top: 47.3%;
        }
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

        ${breakpoints().max("l")} {
            margin-top:5.1rem;
        }

        ${breakpoints().max("m")} {
            margin-top:3rem;
        }
    }
`;

export const Hero: React.FC<{}> = () => {
    const { t } = useTranslation("common");

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Container>
            <HeroWrapper data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <div className="hero__decor" >
                    <DecorBlob/>
                </div>

                <HeroContentWrapper>
                    <Headline size="xxlarge" smallDeskSize="xlarge" tabletSize="xlarge" mobileSize="medium">{t("hero.text")}</Headline>

                    <Button href="#">{t("hero.button")}</Button>
                </HeroContentWrapper>
            </HeroWrapper>
        </Container>
    );
};
