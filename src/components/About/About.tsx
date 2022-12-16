/**
 * External dependencies
 */
import React, {useEffect} from "react";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Headline } from "../Headline/Headline";
import { Addition } from "../Addition/Addition";
import { Container } from "../Container/Container";
import { BlockHead } from "../BlockHead/BlockHead";
import { Row } from "../Row/Row";
import { Col } from "../Col/Col";
import { Feature } from "../Feature/Feature";

const AboutWrapper = styled.div`
    .about__head {
        margin-bottom:7rem;
    }
`;

export const About = () => {
    const { t } = useTranslation("common");

    useEffect(() => {
        AOS.init();
    }, [])

    const list = [
        {
          "title": t("about.list.0.title"),
          "content":t("about.list.0.content")
        },
        {
          "title": t("about.list.1.title"),
          "content":t("about.list.1.content")
        },
        {
          "title": t("about.list.2.title"),
          "content":t("about.list.2.content")
        }
    ]

    return (
        <Container>
        	<AboutWrapper className="about">
                <div className="about__head" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <Row>
                        <Col size={{ s: 12, m: 12, l: 12, xl: 12, xxl: 8 }}>
                            <BlockHead>
                                <Addition size="base">{t("about.small-title")}</Addition>
                                <Headline size="xlarge">{t("about.title")}</Headline>
                                <p >{t("about.sub-title")}</p>
                            </BlockHead>
                        </Col>
                    </Row>
                </div>

                <div className="about__body" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <Row>
                        {
                            list.map((item, index) => (
                                <Col size={{ s: 12, m: 6, l: 8, xl: 3, xxl: 3 }} key={index}>
                                    <Feature icon="" title={item.title} text={item.content} />
                                </Col>
                            ))
                        }
                    </Row>
                </div>
        	</AboutWrapper>
        </Container>
    );
};
