import React, { useState } from "react";
import { CursorProvider } from "../../components/CursorProvider/CursorProvider";
import { Header } from "../../components/Header/Header";
import { SectionSample } from "../../components/SectionSample/SectionSample";
import { Footer } from "../../components/Footer/Footer";
import { GetStaticProps } from "next";
import { LOCALE_DEFAULT } from "@lib/constant";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Meta } from "@lib/meta";
import { useTranslation } from "next-i18next";

const Imprint: React.FC = () => {
    const { t } = useTranslation();
    const [mousePositionY, setMousePositionY] = useState(99999);
    const [mousePositionX, setMousePositionX] = useState(99999);

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

            <SectionSample>
                <div>
                    <h2>Legal Notice / Company Information</h2>

                    <div className="group">
                        <h4>Published by</h4>

                        <p>
                            Igony GmbH
                            <br />
                            Rüttenscheider Str. 1-3
                            <br />
                            45128 Essen
                            <br />
                            <br />
                            Phone: +49 201 801-00
                            <br />
                            Fax: +49 201 801-00
                            <br />
                            Email: <a href="mailto:info@iqony.energy">info@iqony.energy</a>
                        </p>
                    </div>

                    <div className="group">
                        <h4>Represented by the Executive Board</h4>

                        <p>
                            Dr. Andreas Reichel, Vorsitzender
                            <br />
                            Dr. Ralf Schiele
                            <br />
                            Ralf Schmitz
                        </p>
                    </div>

                    <div className="group">
                        <h4>Registered office</h4>

                        <p>Essen</p>
                    </div>

                    <div className="group">
                        <h4>Register court</h4>

                        <p>
                            Registered at Essen Local Court
                            <br />
                            under number B 27667
                        </p>
                    </div>

                    <div className="group">
                        <h4>VAT identification number</h4>

                        <p>DE 309397839</p>
                    </div>

                    <div className="group">
                        <h4>Contact</h4>

                        <p>
                            For information about STEAG GmbH or this website, including the
                            editorial content, please contact:
                            <br />
                            <br />
                            Jan Fischer
                            <br />
                            Head of Digital
                            <br />
                            Iqony GmbH
                            <br />
                            Rüttenscheider Straße 1-3
                            <br />
                            45128 Essen
                            <br />
                            <a href="mailto:jan.fischer@iqony.energy">jan.fischer@iqony.energy</a>
                        </p>
                    </div>

                    <div className="group">
                        <h4>Conception, design and realisation</h4>

                        <p>
                            <a
                                href="https://becklyn.com/"
                                target="_blank"
                                rel="noreferrer noopener">
                                Becklyn
                            </a>
                        </p>
                    </div>
                </div>
            </SectionSample>

            <Footer />
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            ...(await serverSideTranslations(LOCALE_DEFAULT, ["common"])),
        },
    };
};

export default Imprint;
