/**
 * External dependencies
 */
import React, { useState } from "react";
import type { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";


/**
 * Internal dependencies
 */
import { Header }         from "../components/Header/Header";
import { Hero }           from "../components/Hero/Hero";
import { Features }       from "../components/Features/Features";
import { Spacer }         from "../components/Spacer/Spacer";
import { Intro }          from "../components/Intro/Intro";
import { DecorHolder }    from "../components/DecorHolder/DecorHolder";
import { VerticalSlider } from "../components/VerticalSlider/VerticalSlider";
import { Testimonials }   from "../components/Testimonials/Testimonials";
import { FeaturesAlt }    from "../components/FeaturesAlt/FeaturesAlt";
import { Bulletpoint }    from "../components/Bulletpoint/Bulletpoint";
import { Form }           from "../components/Form/Form";
import { About }          from "../components/About/About";
import { Footer }         from "../components/Footer/Footer";    
import { CursorProvider } from "../components/CursorProvider/CursorProvider";
import { SliderGallery }  from "../components/SliderGallery/SliderGallery";
import { Meta }           from "@lib/meta";
import useMedia           from "../components/UseMedia/UseMedia";

const Home: React.FC = () => {
    const { t } = useTranslation();
    const [mousePositionY, setMousePositionY] = useState(0);
    const [mousePositionX, setMousePositionX] = useState(0);
    const isTabletView = useMedia(1024)

    return (
        <div className="wrapper" style={{ "--mouse-left":mousePositionX+"px", "--mouse-top":mousePositionY+"px" } as React.CSSProperties}>
            <Meta title={ t("meta.title") } description={ t("meta.description") } />
            <CursorProvider setMousePositionX={setMousePositionX} setMousePositionY={setMousePositionY}/>
            
            <Header/>
            
            <Hero/>
            
            <section className="scroll-to-element" id="section1">
                <DecorHolder>
                    <Intro/>
            
                    <Spacer>
                        <Features/>
                    </Spacer>
                </DecorHolder>
                
                {
                    isTabletView.isMobile
                        ? <SliderGallery/>
                        : <VerticalSlider/>
                }
            </section>
            
            <DecorHolder position="right">
                <Spacer>
                    <section className="scroll-to-element" id="section2">
                        <FeaturesAlt/>
                    </section>
                </Spacer>
            
                <Spacer>
                    <Bulletpoint/>
                </Spacer>
            </DecorHolder>
            
            <section className="scroll-to-element" id="section3">
                <Testimonials/>
            </section>

            <Spacer>
                <section className="scroll-to-element" id="form">
                    <Form/>
                </section>
            </Spacer>

            <section className="scroll-to-element" id="section5">
                <About/>
            </section>

            <Footer/>
            
            <DecorHolder position="right" size="big">
                <div className="hidden"></div>
            </DecorHolder>
        </div>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async context => {
    const { locale = "en" } = context;

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
};
