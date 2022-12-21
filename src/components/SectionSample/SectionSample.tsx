import React, { PropsWithChildren } from "react";
import styled from "styled-components";

import { Container } from "../Container/Container";
import { Row }       from "../Row/Row";
import { Col }       from "../Col/Col";


const SectionSampleWrapper = styled.div`
    --spacer-big: 10.1rem;
    --spacer-med: 7rem;

    padding: 17.5rem 0 0rem;

    h1,h2,h3,h4,h5,h6,p {
        letter-spacing:-0.02em;
        &:last-child {
            margin-bottom:0;
        }
    }

    h2 { font-size:4.8rem; line-height:1.17; font-weight:500; margin-bottom:3rem; }
    h4 { font-size:2.4rem; line-height:1.25; font-weight:500; margin-bottom:2.9rem; }
    h5 { font-size:1.6rem; line-height:1.5;  font-weight:500; margin-bottom:1.2rem; }
    h6 { font-size:1.6rem; line-height:1.38; font-weight:500; margin-bottom:0.4rem; color: ${p => p.theme.colors.blue}; }

    p { margin-bottom:3rem; }

    > ol {
        &:not(:first-child) {
            margin-top:var(--spacer-big);
        }
    }

    ol {
        li {
            >*:not(ol):first-child:before {
                content: counters(list-item,'.') '. ';
            }
            
        }
        
        > li + li {
            margin-top:var(--spacer-big);
        }

        p + ol {
            margin-top:var(--spacer-med);
        }

        p + h6 {
            margin-top:4.2rem;
        }

        h6 {
            &:not(:last-child) {
                margin-bottom:1.2rem;
            }
        }

        ol {
            p {
                margin-bottom:2.4rem;
            }

            > li + li {
                margin-top:var(--spacer-med);
            }
        }
    }

    ul {
        &:not(:last-child) {
            margin-bottom:2.4rem;
        }
        li {
            position:relative;
            padding-left:2.2rem;

            &:before {
                content:"";
                position:absolute;
                top:1rem;
                left:1rem;
                content:"";
                width:0.3rem;
                height:0.3rem;
                background-color:currentcolor;
            }
        }
    }
`;

export const SectionSample: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Container>
            <Row>
                <Col size={{ s: 12, m: 12, l: 12, xl: 10, xxl: 10 }}>
                    <SectionSampleWrapper>
                        {children}
                    </SectionSampleWrapper>
                </Col>
            </Row>
        </Container>
    )
};
