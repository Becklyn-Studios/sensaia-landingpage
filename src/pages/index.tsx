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

const Home: React.FC = () => {
    return (
        <div>
            <Header />

            <Hero />
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
