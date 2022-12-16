/**
 * External dependencies
 */
import React ,{ useState, useEffect }from "react";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver }  from "@hookform/resolvers/yup";
import * as yup         from "yup";
import classNames       from 'classnames';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Container } from "../Container/Container";
import { Headline } from "../Headline/Headline";
import { BlockHead } from "../BlockHead/BlockHead";
import { Row } from "../Row/Row";
import { Col } from "../Col/Col";
import { CustomField } from "../CustomField/CustomField";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Checkbox } from "../Checkbox/Checkbox";
import { Button } from "../Button/Button";

const SignupSchema = yup.object().shape({
    title:   yup.string().required(),
    firstName:   yup.string().required(),
    lastName:    yup.string().required(),
    company:     yup.string().required(),
    email:       yup.string().email().required(),
    checkbox:    yup.boolean().default(false).oneOf([true]),
});

const FormWrapper = styled.div`
    position:relative;

    > .row {
        justify-content:center;
    }

    .form__alert {
        position:absolute;
        top:-15rem;
        left:50%;
        transform:translate(-50%, 0);
        padding: 1.8rem 3rem;
        background: #17CB49;
        border-radius: 0.6rem;
        font-weight:500;
        color:${p => p.theme.colors.blue2};
        opacity:0;
        transition: opacity 0.3s;

        &.is-visible {
            opacity: 1;
        }
    }

    .form__head {
        text-align:center;
        margin-bottom:4.7rem;
    }
    
    .form__body {
        > .row {
            --guter-y: 2rem;
        }
    }

    .form__actions {
        margin-top:3.1rem;
    }
`;

type FormValues = {
    title:  string;
    firstName:  string;
    lastName:  string;
    company:  string;
    email:  string;
    checkbox:  boolean;
}

export const Form: React.FC<{}> = () => {
    const { t } = useTranslation("common");
    const [showAlert, setShowAlert] = useState(false);

    const { handleSubmit, formState: { errors }, control  } = useForm<FormValues>({
        mode: 'onChange',
        resolver: yupResolver(SignupSchema)
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)

        setShowAlert(true);
        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 2500);
        return () => clearTimeout(timer);
    };

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Container>
            <FormWrapper>
                <Row>
                    <Col size={{ s: 12, m: 12, l: 12, xl: 8, xxl: 6 }}>
                        <div className={classNames('form__alert', { "is-visible": showAlert })}>{t("form.alert")}</div>

                        <div className="form__head" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                            <BlockHead>
                                <Headline size="large">{t("form.title")}</Headline>
                                
                                <p>{t("form.sub-title")}</p>
                            </BlockHead>
                        </div>

                        <div className="form__body" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <Row>
                                    <Col size={{ s: 12, m: 12, l: 12, xl: 6, xxl: 6 }}>
                                        <Controller
                                            control={control}
                                            name={`title`}
                                            render={({field}) => {
                                                    return ( <CustomSelect label={t("form.fields.title")+"*"} error={!!errors.title} onChange={field.onChange} list={["Mr","Ms", "–"]}/> )
                                                }
                                            }
                                        />
                                    </Col>

                                    <Col size={{ s: 12, m: 12, l: 12, xl: 6, xxl: 6 }}>
                                        <div className="hidden"></div>
                                    </Col>

                                    <Col size={{ s: 12, m: 12, l: 12, xl: 6, xxl: 6 }}>
                                        <Controller
                                            control={control}
                                            name={`firstName`}
                                            render={({field}) => {
                                                    return ( <CustomField label={t("form.fields.first-name")} error={!!errors.firstName} onChange={field.onChange}/> )
                                                }
                                            }
                                        />
                                    </Col>

                                    <Col size={{ s: 12, m: 12, l: 12, xl: 6, xxl: 6 }}>
                                        <Controller
                                            control={control}
                                            name={`lastName`}
                                            render={({field}) => {
                                                    return ( <CustomField label={t("form.fields.last-name")} error={!!errors.lastName} onChange={field.onChange}/> )
                                                }
                                            }
                                        />
                                    </Col>

                                    <Col size={{ s: 12, m: 12, l: 12, xl: 6, xxl: 6 }}>
                                        <Controller
                                            control={control}
                                            name={`company`}
                                            render={({field}) => {
                                                    return ( <CustomField label={t("form.fields.company")} error={!!errors.company} onChange={field.onChange}/> )
                                                }
                                            }
                                        />
                                    </Col>

                                    <Col size={{ s: 12, m: 12, l: 12, xl: 6, xxl: 6 }}>
                                        <Controller
                                            control={control}
                                            name={`email`}
                                            render={({field}) => {
                                                    return ( <CustomField label={t("form.fields.mail")} error={!!errors.email} onChange={field.onChange} /> )
                                                }
                                            }
                                        />
                                    </Col>

                                    <Col size={{xl: 12, xxl: 12 }}>
                                        <Controller
                                            control={control}
                                            name={`checkbox`}
                                            render={({field}) => {
                                                    return ( <Checkbox label={t("form.checkbox")} error={!!errors.checkbox} onChange={field.onChange} /> )
                                                }
                                            }
                                        />
                                    </Col>

                                    <Col size={{xl: 12, xxl: 12 }}>
                                        <div className="form__actions">
                                            <Button type="submit">Submit</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>
            </FormWrapper>
        </Container>
    );
};
