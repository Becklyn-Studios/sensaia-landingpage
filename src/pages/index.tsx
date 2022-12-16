/**
 * External dependencies
 */
import React from "react";
import type { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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


const Home: React.FC = () => {
    return (
        <div className="wrapper">
            <Header/>

            <Hero/>

            <section id="section1">
                <DecorHolder>
                    <Intro/>

                    <Spacer>
                        <Features/>
                    </Spacer>
                </DecorHolder>
                
                <Spacer>
                    <VerticalSlider/>
                </Spacer>
            </section>

            <section id="section2">
                <DecorHolder position="right">
                    <Spacer>
                        <FeaturesAlt/>
                    </Spacer>

                    <Spacer>
                        <Bulletpoint/>
                    </Spacer>
                </DecorHolder>
            </section>

            <section id="section3">
                <Spacer>
                    <Testimonials/>
                </Spacer>
            </section>

            <section id="section4">
                <Spacer>
                    <Form/>
                </Spacer>
            </section>

            <section id="section5">
                <DecorHolder position="right" size="big">
                    <About/>
                </DecorHolder>
            </section>
            <Footer/>
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
