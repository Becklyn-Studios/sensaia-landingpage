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

const Privacy: React.FC = () => {
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
                    <div className="group">
                        <h6>Data protection</h6>

                        <h2>It’s your right - and our obligation</h2>

                        <p>
                            The protection of personal data is an important concern for us. For this
                            reason we process your data strictly in accordance with the provisions
                            of the EU’s General Data Protection Regulation (GDPR) and other
                            applicable legal provisions on the protection of personal data and data
                            security.
                            <br />
                            <br />
                            The following information applies to our internet presence (referred to
                            below simply as the &quot;website&quot;). It provides you with an
                            overview of the personal data we collect from you via our website, as
                            well as for what purposes and in what way we use the data. In addition,
                            we inform you about the rights you have in relation to your personal
                            data.
                        </p>
                    </div>

                    <ol className="group">
                        <li>
                            <h4>The data controller within the meaning of data protection law</h4>

                            <p>
                                Iqony GmbH
                                <br />
                                Rüttenscheider Str. 1-3
                                <br />
                                45128 Essen
                                <br />
                                info@iqony.energy
                                <br />
                                www.iqony.energy
                            </p>
                        </li>

                        <li>
                            <h4>Contact details of our data protection officer</h4>

                            <p>
                                STEAG GmbH
                                <br />
                                Konzerndatenschutzbeauftragter
                                <br />
                                Rüttenscheider Straße 1-3
                                <br />
                                45128 Essen
                                <br />
                                datenschutz@steag.com
                            </p>
                        </li>

                        <li>
                            <h4>Processing of your data</h4>

                            <p>
                                We basically process personal data only if this is necessary for the
                                provision of a functional service or offer on our website. Any
                                further processing of personal data only takes place with your
                                consent. Below we explain which of the offers, functions or services
                                that you will find on our website always require processing, and
                                which ones we only offer you on the basis of your consent.
                            </p>
                        </li>

                        <li>
                            <h4>Legal basis and purposes of processing</h4>

                            <ol>
                                <li>
                                    <h5>Use of the website</h5>

                                    <p>
                                        Each time you visit our website, our system automatically
                                        collects data and information from your computer system in
                                        so-called ‘server log files’, which your browser
                                        automatically transmits to us. When you access our website,
                                        your IP address is anonymised by our website provider. The
                                        recorded data includes:
                                    </p>

                                    <ul>
                                        <li>the browser type and version used</li>
                                        <li>the operating system</li>
                                        <li>the date and time of the server request</li>
                                        <li>status and error codes with execution time</li>
                                        <li>the website from which the request originated</li>
                                        <li>IP address (anonymised before recording)</li>
                                        <li>URL/address of the elements to be loaded</li>
                                        <li>type of request (GET or POST)</li>
                                    </ul>

                                    <p>
                                        This data is partly transmitted to us automatically due to
                                        the setting of your device. It is in part necessary to
                                        display our website correctly and to design it securely, as
                                        well as to detect and rectify possible technical problems (§
                                        25 Para. 2 No. 2 of Germany’s Teleservices Data Protection
                                        Act - TTDSG)). To the extent that we use this data to make
                                        our website more usable and attractive, we assert a
                                        legitimate interest in accordance with Art. 6 Para. 1 S. 1
                                        lit. f) GDPR. Your server log data is deleted after two
                                        months at the latest. Since the collection of data for the
                                        provision of the website and the storage of the data in log
                                        files is absolutely necessary for the operation of the
                                        website, you have no possibility to object in this case.
                                        Your data is passed on to our hosting service provider.
                                    </p>
                                </li>

                                <li>
                                    <h5>Information provided by you</h5>

                                    <p>
                                        If you use our general contact form, we will receive your
                                        message at sensaia@iqony.energy. We process the data you
                                        provide for the purpose you specify on the basis of your
                                        consent (legal basis Art. 6 Para. 1 S. 1 lit. a) GDPR). We
                                        store the information that you provide to us via the contact
                                        form. The information provided is used for the purpose of
                                        processing your request. Your data is deleted once we have
                                        completed processing your enquiry. You can revoke your
                                        consent at any time with effect for the future. Further
                                        details can be found in Section 6: &quot;Your rights&quot;.
                                    </p>
                                </li>

                                <li>
                                    <h5>Cookies</h5>

                                    <p>
                                        We also use cookies in some parts of our website. Cookies
                                        are small data elements that a web server can send to your
                                        computer. They store information about your visit to our
                                        site. Our website uses different types of cookies. Some
                                        cookies ensure the correct functioning of the website
                                        (required cookies). Others increase your convenience when
                                        visiting the website, for example so that you do not have to
                                        enter settings once more when you visit our website again.
                                        And some provide us with information about your user
                                        behaviour on our website so that we can improve the
                                        performance of our website. By law we may store cookies on
                                        your device if they are strictly necessary for the operation
                                        of our website. All other cookies are presented below with
                                        an explanation of their purpose and legal basis. Some
                                        cookies are placed by third parties that appear on our
                                        pages, and we also indicate this separately below. The first
                                        time you visit our website you are asked if you wish to
                                        actively consent to the use of cookies.
                                    </p>

                                    <p>
                                        <script
                                            id="CookieDeclaration"
                                            src="https://consent.cookiebot.com/a6418414-7b90-41f3-b2b7-bbabf4e317f0/cd.js"
                                            type="text/javascript"
                                            async
                                        />
                                    </p>

                                    <ol>
                                        <li>
                                            <h5>Google Analytics 4</h5>

                                            <p>
                                                If you have declared your consent (Art. 6 Para. 1 S.
                                                1 lit. a) GDPR), Google Analytics, a web analytics
                                                service provided by Google LLC, is used on this
                                                website. In the EU the service provider responsible
                                                is Google Ireland Limited, Gordon House, Barrow
                                                Street, Dublin 4, Ireland (&quot;Google&quot;).
                                            </p>

                                            <h6>Scope of the processing</h6>

                                            <p>
                                                Google Analytics uses cookies that enable an
                                                analysis of your use of our website. The information
                                                collected by means of the cookies about your use of
                                                this website is generally transferred to a Google
                                                server in the USA and stored there. The use includes
                                                the Universal Analytics mode of operation: this
                                                makes it possible to assign data, sessions and
                                                interactions across multiple devices to a
                                                pseudonymised user ID and thus to analyse the
                                                activities of a user across devices. We use the
                                                ‘anonymizeIP’ function (so-called ‘IP masking’): Due
                                                to the activation of IP anonymisation on this
                                                website, your IP address will be abbreviated by
                                                Google within member states of the European Union or
                                                in other contracting states of the Agreement on the
                                                European Economic Area. According to Google, the IP
                                                address transmitted by your browser as part of
                                                Google Analytics is not merged with other Google
                                                data.
                                            </p>

                                            <p>
                                                During your visit to our website Google Analytics
                                                collects the following data, among others:
                                            </p>
                                            <ul>
                                                <li>
                                                    the pages you visit, your &quot;click path&quot;
                                                </li>
                                                <li>
                                                    achievement of &quot;website goals&quot; (e.g.
                                                    newsletter sign-ups, downloads)
                                                </li>
                                                <li>
                                                    your user behaviour (e.g. clicks, length of
                                                    stay, bounce rates)
                                                </li>
                                                <li>
                                                    your approximate location (city in country X)
                                                </li>
                                                <li>your IP address (in abbreviated form)</li>
                                                <li>
                                                    technical information about your browser and the
                                                    terminal devices you use (e.g. language setting,
                                                    screen resolution)
                                                </li>
                                                <li>your internet service provider</li>
                                                <li>
                                                    the website from which the request originated
                                                </li>
                                            </ul>

                                            <h6>Purpose of the processing</h6>

                                            <p>
                                                On behalf of the operator of this website, Google
                                                uses this information to evaluate your use of the
                                                website and to compile reports on website activity.
                                                The reports provided by Google Analytics are used to
                                                analyse the performance of our application and the
                                                success of our marketing campaigns.
                                            </p>

                                            <h6>Recipient</h6>

                                            <p>
                                                The recipient of the data is Google Ireland Limited,
                                                Gordon House, Barrow Street, Dublin 4, Ireland in
                                                its capacity as a data processor. We have concluded
                                                a data processing contract with Google for this
                                                purpose. Google has confirmed to us that it
                                                processes your data in the European Economic Area.
                                                We cannot rule out the possibility that Google LLC,
                                                based in California, USA, and possibly the US
                                                authorities may access the data stored by Google.
                                                Please also read our risk information on Section 5
                                                &quot;Recipients of your data&quot;.
                                            </p>

                                            <h6>Retention period</h6>

                                            <p>
                                                The data is automatically deleted after 12 months.
                                                Data that has reached the end of its retention
                                                period is automatically deleted on a monthly basis.
                                            </p>

                                            <h6>Legal basis and revocation option</h6>

                                            <p>
                                                Your consent under Art. 6 Para.1 S.1 lit. a) GDPR is
                                                a prerequisite for this data processing. You can
                                                revoke your consent at any time with effect for the
                                                future. To do so, follow the link provided under
                                                Section 4.3 &quot;Cookies&quot;.
                                                <br /> You will find more information on the terms
                                                of use of Google Analytics and on data protection at
                                                Google at
                                                https://marketingplatform.google.com/about/analytics/terms/de/
                                                or at https://policies.google.com/?hl=de.
                                            </p>
                                        </li>

                                        <li>
                                            <h5>Our website</h5>

                                            <p>
                                                We use IT and support service providers to provide
                                                our website. These service providers are carefully
                                                selected by us and act as processors on our behalf.
                                            </p>

                                            <p>
                                                Our hosting provider is Hetzner Online GmbH,
                                                Industriestr. 25, 91710 Gunzenhausen. Our website
                                                agency is BOROS, Hofaue 63, 42103 Wuppertal.
                                            </p>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>

                        <li>
                            <h4>Recipients of your data / Transfer to Non-EU countries</h4>

                            <p>
                                The processing of your personal data generally takes place in a
                                member state of the European Union or in another state party to the
                                Agreement on the European Economic Area. A transfer of personal data
                                to a non-EU country or access to such data from a non-EU country
                                will only take place if the specific requirements of Art. 44 et seq.
                                GDPR are fulfilled (e.g. through the agreement of standard
                                contractual clauses or if the recipient acts on the basis of legal
                                grounds adopted by the European Commission in accordance with Art.
                                45 Para. 1 GDPR (so-called adequacy decision)). More details can be
                                found at the individual providers mentioned in Section 4.
                            </p>

                            <h6>Please note: data transfer to the USA</h6>

                            <p>
                                With regard to the use of analytical and third-party cookies
                                (Google), data transfer to the USA cannot be ruled out.
                                Unfortunately, this is not currently possible in accordance with
                                data protection regulations. In this respect, please note this when
                                you give us your declaration of consent regarding the setting of
                                these cookies.
                            </p>

                            <p>
                                We wish to point out that in its ruling of 16.07.2020 (Case
                                C-311/18), the ECJ declared the EU-US Privacy Shield agreement on
                                the permissible transfer of data between the EU and the USA to be
                                inadmissible and that personal data cannot currently be transferred
                                to the USA in a data protection-compliant manner. The reason for
                                this is existing laws in the USA that give security authorities
                                far-reaching powers to monitor &quot;foreign communications&quot;.
                                We hereby expressly draw your attention to this risk.
                            </p>
                        </li>

                        <li>
                            <h4>Your rights</h4>

                            <p>
                                You have a right to information, which means you can ask us to
                                disclose all the personal information we have collected and retain
                                for a period of time (Art. 15 GDPR). In addition, you can also
                                request rectification (Art. 16 GDPR), deletion (Art. 17 GDPR) or
                                restriction of processing (Art. 18 GDPR), and have a right of appeal
                                to a data protection supervisory authority (Art. 77 GDPR in
                                conjunction with § 19 of the Federal Data Protection Act - BDSG).
                            </p>

                            <p>
                                If we process your personal data on the basis of your consent, you
                                can revoke this consent at any time with regard to the future. The
                                revocation of consent does not affect the lawfulness of the
                                processing carried out on the basis of the consent until the
                                revocation, but the processing will cease in the future.
                            </p>

                            <p>
                                You can submit any revocation or other requests to our Group Data
                                Protection Officer. We take your enquiries and concerns very
                                seriously and always endeavour to accommodate them.
                            </p>

                            <p>Stand: November 2022</p>
                        </li>
                    </ol>
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

export default Privacy;
