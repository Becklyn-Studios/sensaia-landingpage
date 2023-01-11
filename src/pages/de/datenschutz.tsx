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
                        <h6>Datenschutz</h6>

                        <h2>Ihr gutes Recht - unsere Verpflichtung</h2>

                        <p>
                            Der Schutz personenbezogener Daten ist uns ein wichtiges Anliegen.
                            Deshalb verarbeiten wir Ihre Daten in Übereinstimmung mit den
                            Vorschriften der europäischen Datenschutzgrundverordnung (DSGVO) und den
                            weiteren anwendbaren Rechtsvorschriften zum Schutz personenbezogener
                            Daten und der Datensicherheit.
                            <br />
                            <br />
                            Die nachfolgenden Informationen gelten für unseren Internetauftritt
                            (nachfolgend nur &quot;Website&quot; genannt). Sie geben Ihnen einen
                            Überblick darüber, welche personenbezogenen Daten wir über unsere
                            Website von Ihnen erheben sowie zu welchen Zwecken und auf welche Weise
                            wir diese nutzen. Darüber hinaus informieren wir Sie über die Rechte,
                            die Ihnen in Bezug auf Ihre personenbezogenen Daten uns gegenüber
                            zustehen.
                        </p>
                    </div>

                    <ol className="group">
                        <li>
                            <h4>Verantwortliche Stelle im Sinne des Datenschutzrechts</h4>

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
                            <h4>Kontaktdaten unseres Datenschutzbeauftragten</h4>

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
                            <h4>Verarbeitung Ihrer Daten</h4>

                            <p>
                                Wir verarbeiten personenbezogene Daten grundsätzlich dann, wenn dies
                                für die Bereitstellung eines funktionsfähigen Dienstes oder Angebots
                                auf unserer Website notwendig ist. Eine weitergehende
                                personenbezogene Verarbeitung erfolgt nur mit Ihrer Einwilligung. Im
                                Folgenden klären wir Sie darüber auf, welche unserer Angebote,
                                Funktionen oder Dienste, die Sie auf unseren Seiten finden, eine
                                Verarbeitung erfordern und welche wir Ihnen nur auf Basis Ihrer
                                Einwilligung anbieten.
                            </p>
                        </li>

                        <li>
                            <h4>Rechtsgrundlage und Zwecke der Verarbeitung</h4>

                            <ol>
                                <li>
                                    <h5>Nutzung der Website</h5>

                                    <p>
                                        Bei jedem Aufruf unserer Website, erfasst unser System
                                        automatisiert Daten und Informationen von dem Computersystem
                                        Ihres Rechners in so genannten Server-Log Files, die Ihr
                                        Browser automatisch an uns übermittelt. Bei einem Aufruf
                                        einer Website wird Ihre IP-Adresse durch unseren
                                        Webseitenanbieter anonymisiert. Zu den aufgezeichneten Daten
                                        gehören:
                                    </p>

                                    <ul>
                                        <li>der verwendete Browsertyp und die Browserversion</li>
                                        <li>das Betriebssystem</li>
                                        <li>Datum und Uhrzeit der Serveranfrage</li>
                                        <li>Status- und Fehlercodes mit Ausführungszeit</li>
                                        <li>
                                            Website, von der die Anforderung kommt („Absprungseite“)
                                        </li>
                                        <li>IP-Adresse (vor Aufzeichnung anonymisiert)</li>
                                        <li>URL/ Adresse der zu ladenden Elemente</li>
                                        <li>Art des Request (GET oder POST)</li>
                                    </ul>

                                    <p>
                                        Diese Daten werden teilweise aufgrund der Einstellung Ihres
                                        Endgeräts automatisch an uns übermittelt. Sie sind teilweise
                                        erforderlich, um unsere Website korrekt anzuzeigen und
                                        sicher zu gestalten sowie mögliche technische Probleme zu
                                        erkennen und zu beheben (§ 25 Abs. 2 Nr. 2 TTDSG). Soweit
                                        wir mit Hilfe dieser Daten unsere Website bedienbarer und
                                        attraktiver gestalten, machen wir berechtigtes Interesse
                                        gemäß Art. 6 Abs. 1 S. 1 lit. f) DSGVO geltend. Ihre
                                        Server-Log-Daten werden spätestens nach zwei Monaten
                                        gelöscht. Da die Erfassung der Daten zur Bereitstellung der
                                        Website und die Speicherung der Daten in Logfiles für den
                                        Betrieb der Website zwingend erforderlich ist, haben Sie
                                        keine Widerspruchsmöglichkeit. Ihre Daten werden an unseren
                                        Hosting-Dienstleister weitergegeben.
                                    </p>
                                </li>

                                <li>
                                    <h5>Von Ihnen zur Verfügung gestellte Informationen</h5>

                                    <p>
                                        Wenn Sie unser allgemeines Kontaktformular nutzen, erhalten
                                        wir Ihre Nachricht an sensaia@steag.com. Wir verarbeiten
                                        Ihre angegebenen Daten zum von Ihnen angegebenen Zweck auf
                                        Basis Ihrer Einwilligung (Rechtsgrundlage Art. 6 Abs. 1 S. 1
                                        lit. a) DSGVO). Wir speichern Informationen, die Sie uns via
                                        Kontaktformular zukommen lassen. Die zur Verfügung
                                        gestellten Informationen werden zweckgebunden verwendet, um
                                        Ihre Anfrage zu bearbeiten. Ihre Daten werden nach
                                        abgeschlossener Bearbeitung Ihrer Anfrage gelöscht. Sie
                                        können Ihre Einwilligung jederzeit mit Wirkung für die
                                        Zukunft widerrufen, Details finden Sie im Kapitel 6 „Ihre
                                        Rechte“.
                                    </p>
                                </li>

                                <li>
                                    <h5>Cookies</h5>

                                    <p>
                                        Zudem setzen wir in einigen Bereichen unserer Website
                                        zusätzlich Cookies ein. Cookies sind kleine Datenelemente,
                                        die ein Webserver an Ihren Computer senden kann. Sie
                                        speichern Informationen über den Besuch unserer Seite.
                                        Unsere Website verwendet unterschiedliche Cookie-Typen.
                                        Manche Cookies gewährleisten die korrekte Funktion der
                                        Website (notwendige Cookies). Andere erhöhen Ihren Komfort
                                        beim Webeseitenbesuch, etwa damit Sie bei wiederholtem
                                        Besuch auf unserer Website Einstellungen nicht erneut
                                        vornehmen müssen. Und einige geben uns Aufschluss über Ihr
                                        Nutzerverhalten auf unserer Website, damit wir die
                                        Performance unserer Website verbessern können. Laut Gesetz
                                        können wir Cookies auf Ihrem Gerät speichern, wenn diese für
                                        den Betrieb unserer Website unbedingt notwendig sind. Alle
                                        weiteren Cookies stellen wir Ihnen im Folgenden vor und
                                        gehen auf Zweck und Rechtsgrundlage der ein. Einige Cookies
                                        werden von Drittparteien platziert, die auf unseren Seiten
                                        erscheinen, auch hierauf weisen wir im Folgenden separat
                                        hin. Beim ersten Besuch unserer Website werden Sie gefragt,
                                        ob Sie dem Einsatz von Cookies aktiv zustimmen wollen.
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
                                                Soweit Sie Ihre Einwilligung (Art. 6 Abs. 1 S. 1
                                                lit. a) DSGVO) erklärt haben, wird auf dieser
                                                Website Google Analytics eingesetzt, ein
                                                Webanalysedienst der Google LLC. Zuständiger
                                                Dienstanbieter in der EU ist die Google Ireland
                                                Limited, Gordon House, Barrow Street, Dublin 4,
                                                Irland („Google“).
                                            </p>

                                            <h6>Umfang der Verarbeitung</h6>

                                            <p>
                                                Google Analytics verwendet Cookies, die eine Analyse
                                                der Benutzung unserer Webseiten durch Sie
                                                ermöglichen. Die mittels der Cookies erhobenen
                                                Informationen über Ihre Benutzung dieser Website
                                                werden in der Regel an einen Server von Google in
                                                den USA übertragen und dort gespeichert. Die Nutzung
                                                umfasst die Betriebsart Universal Analytics: Durch
                                                diese ist es möglich, Daten, Sitzungen und
                                                Interaktionen über mehrere Geräte hinweg einer
                                                pseudonymen User-ID zuzuordnen und dadurch die
                                                Aktivitäten eines Nutzers geräteübergreifend zu
                                                analysieren. Wir nutzen die Funktion ‘anonymizeIP’
                                                (sog. IP-Masking): Aufgrund der Aktivierung der
                                                IP-Anonymisierung auf dieser Webseite wird Ihre
                                                IP-Adresse von Google innerhalb von Mitgliedstaaten
                                                der Europäischen Union oder in anderen
                                                Vertragsstaaten des Abkommens über den Europäischen
                                                Wirtschaftsraum gekürzt. Die im Rahmen von Google
                                                Analytics von Ihrem Browser übermittelte IP-Adresse
                                                wird nach Aussage von Google nicht mit anderen Daten
                                                von Google zusammengeführt.
                                            </p>

                                            <p>
                                                {" "}
                                                Während Ihres Website-Besuchs werden durch Google
                                                Analytics u.a. folgende Daten erfasst:{" "}
                                            </p>
                                            <ul>
                                                <li>
                                                    die von Ihnen aufgerufenen Seiten, Ihr
                                                    „Klickpfad“
                                                </li>
                                                <li>
                                                    Erreichung von „Website-Zielen“ (z.B.
                                                    Newsletter-Anmeldungen, Downloads)
                                                </li>
                                                <li>
                                                    Ihr Nutzerverhalten (beispielsweise Klicks,
                                                    Verweildauer, Absprungraten)
                                                </li>
                                                <li>Ihr ungefährer Standort (Stadt in Land X)</li>
                                                <li>Ihre IP-Adresse (in gekürzter Form)</li>
                                                <li>
                                                    technische Informationen zu Ihrem Browser und
                                                    den von Ihnen genutzten Endgeräten (z.B.
                                                    Spracheinstellung, Bildschirmauflösung)
                                                </li>
                                                <li>Ihr Internetanbieter</li>
                                                <li>
                                                    Website, von der die Anforderung kommt
                                                    („Absprungseite“)
                                                </li>
                                            </ul>

                                            <h6>Zwecke der Verarbeitung</h6>

                                            <p>
                                                Im Auftrag des Betreibers dieser Website wird Google
                                                diese Informationen benutzen, um Ihre Nutzung der
                                                Website auszuwerten und um Reports über die
                                                Website-Aktivitäten zusammenzustellen. Die durch
                                                Google Analytics bereitgestellten Reports dienen der
                                                Analyse der Leistung unserer Applikation und des
                                                Erfolgs unserer Marketing-Kampagnen.
                                            </p>

                                            <h6>Empfänger</h6>

                                            <p>
                                                Empfänger der Daten ist Google Ireland Limited,
                                                Gordon House, Barrow Street, Dublin 4, Irland als
                                                Auftragsverarbeiter. Hierfür haben wir mit Google
                                                einen Auftragsverarbeitungsvertrag abgeschlossen.
                                                Google hat uns bestätigt, dass sie Ihre Daten im
                                                europäischen Wirtschaftsraum verarbeiten. Wir können
                                                nicht ausschließen, dass die Google LLC mit Sitz in
                                                Kalifornien, USA, und ggf. US-amerikanische Behörden
                                                auf die bei Google gespeicherten Daten zugreifen
                                                können. Lesen Sie hierzu auch unseren Risiko-Hinweis
                                                zur Kapitel 5 „Empfänger Ihrer Daten“.
                                            </p>

                                            <h6>Speicherdauer</h6>

                                            <p>
                                                Die Daten werden nach 12 Monaten automatisch
                                                gelöscht. Die Löschung von Daten, deren
                                                Aufbewahrungsdauer erreicht ist, erfolgt automatisch
                                                einmal im Monat.
                                            </p>

                                            <h6>Rechtsgrundlage und Widerrufsmöglichkeit</h6>

                                            <p>
                                                Für diese Datenverarbeitung ist Ihre Einwilligung,
                                                Art. 6 Abs.1 S.1 lit. a) DSGVO, Voraussetzung. Sie
                                                können Ihre Einwilligung jederzeit mit Wirkung für
                                                die Zukunft widerrufen. Folgen Sie dazu dem unter
                                                Kapitel 4.3 „Cookies“ angegebenen Link.
                                                <br /> Nähere Informationen zu Nutzungsbedingungen
                                                von Google Analytics und zum Datenschutz bei Google
                                                finden Sie unter{" "}
                                                <a href="en#">
                                                    https://marketingplatform.google.com/about/analytics/terms/de/
                                                </a>{" "}
                                                und unter{" "}
                                                <a href="en#">
                                                    https://policies.google.com/?hl=de.
                                                </a>
                                            </p>
                                        </li>

                                        <li>
                                            <h5>Unsere Website</h5>

                                            <p>
                                                Wir setzen zur Bereitstellung der Website IT- und
                                                Support-Dienstleister ein. Diese Dienstleister
                                                werden von uns sorgfältig ausgewählt und sind für
                                                uns als Auftragsverarbeiter tätig.
                                            </p>

                                            <p>
                                                Unser hosting-Anbieter ist Hetzner Online GmbH,
                                                Industriestr. 25, 91710 Gunzenhausen. Unsere
                                                Website-Agentur ist BOROS, Hofaue 63, 42103
                                                Wuppertal.
                                            </p>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>

                        <li>
                            <h4>Empfänger Ihrer Daten / Drittlandtransfers</h4>

                            <p>
                                Die Verarbeitung Ihrer personenbezogenen Daten findet grundsätzlich
                                in einem Mitgliedsstaat der Europäischen Union oder in einem anderen
                                Vertragsstaat des Abkommens über den Europäischen Wirtschaftsraum
                                statt. Eine Verlagerung der personenbezogenen Daten in ein Drittland
                                oder ein Zugang zu diesen Daten aus einem Drittland erfolgt nur,
                                wenn die besonderen Voraussetzungen der Art. 44 ff. DSGVO erfüllt
                                sind (z.B. durch die Vereinbarung von Standardvertragsklauseln oder
                                sofern der Empfänger auf Basis einer Rechtsgrundlage handelt, welche
                                die Europäische Kommission nach Art. 45 Abs. 1 DSGVO beschlossen hat
                                (sog. Angemessenheitsbeschluss)). Nähere Angaben finden Sie bei den
                                einzelnen in Kapitel 4 genannten Anbietern.
                            </p>

                            <h6>Hinweis: Datenübermittlung in die USA</h6>

                            <p>
                                Bezogen auf den Einsatz von Analyse- und Drittanbieter-Cookies
                                (Google) kann eine Datenübertragung in die USA nicht ausgeschlossen
                                werden. Dies ist leider derzeit nicht datenschutzkonform möglich.
                                Insofern beachten Sie dieses bitte, wenn Sie uns Ihre
                                Einwilligungserklärung hinsichtlich des Setzens dieser Cookies
                                erteilen.
                            </p>

                            <p>
                                Wir weisen darauf hin, dass der EuGH in seinem Urteil vom 16.07.2020
                                (Rechtssache C-311/18) die EU-US Privacy-Shield-Vereinbarung zum
                                zulässigen Datentransfer zwischen der EU und den USA für unzulässig
                                erklärt hat und personenbezogenen Daten derzeit nicht
                                datenschutzkonform in die USA übertragen werden können. Grund dafür
                                sind bestehende Gesetze in den USA, die Sicherheitsbehörden
                                weitreichende Befugnisse zur Überwachung &apos;ausländischer
                                Kommunikation&apos; ermöglichen. Wir weisen Sie hiermit ausdrücklich
                                auf dieses Risiko hin.
                            </p>
                        </li>

                        <li>
                            <h4>Ihre Rechte</h4>

                            <p>
                                Sie besitzen ein Auskunftsrecht, d.h. Sie Sie können von uns
                                verlangen, all die personenbezogenen Informationen, die wir erhoben
                                haben und auf Zeit vorhalten, bekannt zu geben (Art. 15 DSGVO).
                                Darüber hinaus können Sie auch die Berichtigung (Art. 16 DSGVO) oder
                                die Löschung (Art. 17 DSGVO) oder die Einschränkung der Verarbeitung
                                (Art. 18 DSGVO) fordern und haben ein Beschwerderecht bei einer
                                Datenschutzaufsichtsbehörde (Art. 77 DSGVO i. V. m. § 19 BDSG).
                            </p>

                            <p>
                                Sofern wir Ihre personenbezogenen Daten auf Basis Ihrer Einwilligung
                                verarbeiten, können Sie diese Einwilligung jederzeit mit Wirkung für
                                die Zukunft widerrufen. Durch den Widerruf der Einwilligung wird die
                                Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf
                                erfolgten Verarbeitung nicht berührt, jedoch die Verarbeitung für
                                die Zukunft unterbleibt.
                            </p>

                            <p>
                                Widerruf und sonstige Verlangen können Sie an unseren
                                Konzerndatenschutzbeauftragten richten. Wir nehmen Ihre Anfragen und
                                Bedenken sehr ernst und bemühen uns, diesen stets nachzukommen.
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
            ...(await serverSideTranslations(LOCALE_DE, ["common"])),
        },
    };
};

export default Privacy;
