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


const Home: React.FC = () => {
    return (
        <div className="wrapper">
            <Header/>

            <Hero/>

            <DecorHolder>
                <Intro/>

                <Spacer>
                    <Features/>
                </Spacer>
            </DecorHolder>
            
            <Spacer>
                <VerticalSlider/>
            </Spacer>

            <DecorHolder>
                <Spacer>
                    <FeaturesAlt/>
                </Spacer>

                <Spacer>
                    <Bulletpoint/>
                </Spacer>
            </DecorHolder>

            <Spacer>
                <Testimonials/>
            </Spacer>

            <Spacer>
                <Form/>
            </Spacer>

            <Spacer>
                about
            </Spacer>
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
