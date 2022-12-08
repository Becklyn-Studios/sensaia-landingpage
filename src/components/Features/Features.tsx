/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

import { useTranslation } from "next-i18next";

/**
 * Internal dependencies
 */
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Headline } from "../Headline/Headline";
import { Paragraph } from "../Paragraph/Paragraph";
// import { Services } from "../Services/Services";

const FeaturesWrapper = styled.div`
    color:red;
`;


export const Features: React.FC<{}> = () => {
    const { t } = useTranslation("common");

    console.log( t("hero.text") )
    return (
        <Container>
            <FeaturesWrapper className="featured">
                <div className="featured__head">
                    <Headline size="large">{t("hero.text")}</Headline>
                    <Headline size="large">{t("features.title")}</Headline>
                    <Paragraph size="copyText">{t("features.title")}</Paragraph>
                </div>

                <div className="featured__body">
                    {/*<Services icon="/blob.png" title="test" text="testCpntet testCpntet testCpntet testCpntet" />*/}
                </div>
            </FeaturesWrapper>
            
            
            <Button href="#">{t("hero.button")}</Button>
        </Container>
    );
};
