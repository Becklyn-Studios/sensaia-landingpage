/**
 * External dependencies
 */
import React from "react";
import type { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

/**
 * Internal dependencies
 */
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Features } from "../components/Features/Features";
import { Spacer } from "../components/Spacer/Spacer";
import { Intro } from "../components/Intro/Intro";
import { DecorBlob } from "../components/DecorBlob/DecorBlob";

const Home: React.FC = () => {
    return (
        <div className="wrapper">
            <Header />

            <Hero />

            <DecorBlob/>

            <Intro/>

            <Spacer>
                <Features/>
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
