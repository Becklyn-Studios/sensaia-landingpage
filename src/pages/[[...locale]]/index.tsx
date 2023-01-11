/**
 * External dependencies
 */
import React, { useState } from "react";
import i18nextConfig from "../../../next-i18next.config";
import type { GetStaticPaths, GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

/**
 * Internal dependencies
 */
import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { Features } from "../../components/Features/Features";
import { Spacer } from "../../components/Spacer/Spacer";
import { Intro } from "../../components/Intro/Intro";
import { DecorHolder } from "../../components/DecorHolder/DecorHolder";
import { VerticalSlider } from "../../components/VerticalSlider/VerticalSlider";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { FeaturesAlt } from "../../components/FeaturesAlt/FeaturesAlt";
import { Bulletpoint } from "../../components/Bulletpoint/Bulletpoint";
import { Form } from "../../components/Form/Form";
import { About } from "../../components/About/About";
import { Footer } from "../../components/Footer/Footer";
import { CursorProvider } from "../../components/CursorProvider/CursorProvider";
import { SliderGallery } from "../../components/SliderGallery/SliderGallery";
import { Meta } from "@lib/meta";
import useMedia from "../../components/UseMedia/UseMedia";
import { LOCALE_DEFAULT } from "@lib/constant";

const Home: React.FC = () => {
    const { t } = useTranslation();
    const [mousePositionY, setMousePositionY] = useState(0);
    const [mousePositionX, setMousePositionX] = useState(0);
    const isTabletView = useMedia(1024);

    return (
        <div
            className="wrapper"
            style={
                {
                    "--mouse-left": mousePositionX + "px",
                    "--mouse-top": mousePositionY + "px",
                } as React.CSSProperties
            }>
            <Meta title={t("meta.title")} description={t("meta.description")} />
            <CursorProvider
                setMousePositionX={setMousePositionX}
                setMousePositionY={setMousePositionY}
            />

            <Header />

            <Hero />

            <DecorHolder>
                <Intro />

                <Spacer>
                    <section className="scroll-to-element" id="intro">
                        <Features />
                    </section>
                </Spacer>
            </DecorHolder>

            <section className="scroll-to-element" id="features">
                {isTabletView.isMobile ? <SliderGallery /> : <VerticalSlider />}
            </section>

            <DecorHolder position="right">
                <Spacer>
                    <section className="scroll-to-element" id="usps">
                        <FeaturesAlt />
                    </section>
                </Spacer>

                <Spacer>
                    <section className="scroll-to-element" id="benefits">
                        <Bulletpoint />
                    </section>
                </Spacer>
            </DecorHolder>

            <Testimonials />

            <Spacer>
                <section className="scroll-to-element" id="experience">
                    <About />
                </section>
            </Spacer>

            <section className="scroll-to-element" id="form">
                <Form />
            </section>

            <Footer />

            <DecorHolder position="right" size="big">
                <div className="hidden"></div>
            </DecorHolder>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = () => {
    return {
        fallback: false,
        paths: [
            { params: { locale: [] } }, // "/" for default locale
            ...i18nextConfig.i18n.locales.map(lng => ({
                params: {
                    locale: [lng],
                },
            })),
        ],
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const locale =
        params && Array.isArray(params["locale"]) && params["locale"].length
            ? params["locale"][0]
            : LOCALE_DEFAULT;

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
};

export default Home;
