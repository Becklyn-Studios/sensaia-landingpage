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

export const getStaticProps: GetStaticProps<{}> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common", "footer"])),
    },
});

export default Home;
