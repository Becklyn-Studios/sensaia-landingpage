import React, { useState } from "react";
import { CursorProvider } from "../../components/CursorProvider/CursorProvider";
import { Header } from "../../components/Header/Header";
import { SectionSample } from "../../components/SectionSample/SectionSample";
import { Footer } from "../../components/Footer/Footer";
import { GetStaticProps } from "next";
import { LOCALE_DE } from "@lib/constant";
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
                    <h2>Impressum</h2>

                    <div className="group">
                        <h4>Herausgeber</h4>

                        <p>
                            Iqony GmbH
                            <br />
                            Rüttenscheider Str. 1-3
                            <br />
                            45128 Essen
                            <br />
                            <br />
                            Telefon: +49 201 801-00
                            <br />
                            Telefax: +49 201 801-00
                            <br />
                            Email: <a href="mailto:info@iqony.energy">info@iqony.energy</a>
                        </p>
                    </div>

                    <div className="group">
                        <h4>Vertreten durch die Geschäftsführung</h4>

                        <p>
                            Dr. Andreas Reichel, Vorsitzender
                            <br />
                            Dr. Ralf Schiele
                            <br />
                            Ralf Schmitz
                        </p>
                    </div>

                    <div className="group">
                        <h4>Sitz der Gesellschaft</h4>

                        <p>Essen</p>
                    </div>

                    <div className="group">
                        <h4>Registergericht</h4>

                        <p>
                            Amtsgericht Essen
                            <br />
                            Handelsregister B 27667
                        </p>
                    </div>

                    <div className="group">
                        <h4>Umsatzsteuer-Identifikationsnummer</h4>

                        <p>DE 309397839</p>
                    </div>

                    <div className="group">
                        <h4>Redaktionelle Verantwortung</h4>

                        <p>
                            Bei Fragen zu Sensaia oder zum Inhalt dieser Website und deren
                            redaktionellen Angeboten wenden Sie sich bitte an den folgenden
                            Ansprechpartner:
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
                        <h4>Konzept, Gestaltung und Umsetzung</h4>

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
            ...(await serverSideTranslations(LOCALE_DE, ["common"])),
        },
    };
};

export default Imprint;
