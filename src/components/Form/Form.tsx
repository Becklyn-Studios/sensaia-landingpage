/**
 * External dependencies
 */
import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classNames from "classnames";
import { breakpoints } from "@css/helper/breakpoints";

import { Container } from "../Container/Container";
import { Headline } from "../Headline/Headline";
import { BlockHead } from "../BlockHead/BlockHead";
import { Row } from "../Row/Row";
import { Col } from "../Col/Col";
import { CustomField } from "../CustomField/CustomField";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Checkbox } from "../Checkbox/Checkbox";
import { Button } from "../Button/Button";
import { AnimateElement } from "../AnimateElement/AnimateElement";

const SignupSchema = yup.object().shape({
    title: yup.string().required(),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    company: yup.string().required(),
    email: yup.string().email("Enter valid Email").required(),
    dataprotection: yup.boolean().default(false).oneOf([true]),
});

const FormWrapper = styled.div`
    position: relative;

    > .row {
        justify-content: center;
    }

    .form__alert {
        position: fixed;
        z-index: 1;
        top: 10rem;
        left: 50%;
        transform: translate(-50%, 0);
        padding: 1.8rem 3rem;
        background: #17cb49;
        border-radius: 0.6rem;
        font-weight: 500;
        color: ${p => p.theme.colors.blue2};
        opacity: 0;
        transition: opacity 0.3s;

        ${breakpoints().max("m")} {
            top: 8rem;
            width: calc(100% - 4rem);
        }

        &.is-visible {
            opacity: 1;
        }
    }

    .form__error {
        background: #cb1717;
        color: ${p => p.theme.colors.white};
    }

    .form__head {
        text-align: center;
        margin-bottom: 4.7rem;

        ${breakpoints().max("l")} {
            max-width: 75%;
            margin: 0 auto 4.7rem;
        }

        ${breakpoints().max("m")} {
            max-width: 100%;
            margin: 0 auto 3rem;
        }

        p {
            ${breakpoints().max("m")} {
                padding: 0 2rem;
            }
        }
    }

    .form__body {
        .row {
            > *:first-child {
                ${breakpoints().min("m")} {
                    margin-right: 50%;
                }
            }
        }

        .checkbox {
            ${breakpoints().max("l")} {
                margin-top: 1rem;
            }

            ${breakpoints().max("m")} {
                margin-top: 1rem;
            }
        }
    }

    .form__actions {
        margin-top: 3.1rem;

        ${breakpoints().max("l")} {
            margin-top: 4.1rem;
        }

        ${breakpoints().max("m")} {
            margin-top: 2rem;
        }
    }
`;

type FormValues = {
    title: string;
    firstname: string;
    lastname: string;
    company: string;
    email: string;
    dataprotection: boolean;
};

export const Form: React.FC<{}> = () => {
    const { t } = useTranslation("common");
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);

    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<FormValues>({
        mode: "onChange",
        resolver: yupResolver(SignupSchema),
    });

    const onSubmit: SubmitHandler<FormValues> = async data => {
        const body = new URLSearchParams();

        for (const prop in data) {
            body.set(prop, data[prop as keyof FormValues].toString());
        }

        const res = await fetch("https://www.sens-energy.com/de/mailapi/?type=1673441066", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body,
        })
            .then(res => res.json())
            .catch(console.error);

        if (res && res.success) {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 4000);
        } else {
            setShowError(true);
            setTimeout(() => {
                setShowError(false);
            }, 4000);
        }
    };

    return (
        <Container>
            <FormWrapper>
                <Row>
                    <Col size={{ s: 12, m: 12, l: 10, xl: 8, xxl: 6 }}>
                        <div className={classNames("form__alert", { "is-visible": showAlert })}>
                            {t("form.alert")}
                        </div>

                        <div
                            className={classNames("form__alert form__error", {
                                "is-visible": showError,
                            })}>
                            {t("form.error")}
                        </div>

                        <div className="form__head">
                            <AnimateElement>
                                <BlockHead>
                                    <Headline
                                        size="large"
                                        smallDeskSize="medium"
                                        tabletSize="large"
                                        mobileSize="medium">
                                        {t("form.title")}
                                    </Headline>

                                    <p>{t("form.sub-title")}</p>
                                </BlockHead>
                            </AnimateElement>
                        </div>

                        <div className="form__body">
                            <AnimateElement>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                        <Col size={{ s: 12, m: 6, l: 6, xl: 6, xxl: 6 }}>
                                            <Controller
                                                control={control}
                                                name={`title`}
                                                render={({ field }) => {
                                                    return (
                                                        <CustomSelect
                                                            label={t("form.fields.title") + "*"}
                                                            error={!!errors.title}
                                                            onChange={field.onChange}
                                                            errorMessage={t(
                                                                "form.fields.title-error-text"
                                                            )}
                                                            list={["Mr", "Ms", "–"]}
                                                        />
                                                    );
                                                }}
                                            />
                                        </Col>

                                        <Col size={{ s: 12, m: 6, l: 6, xl: 6, xxl: 6 }}>
                                            <Controller
                                                control={control}
                                                name={`firstname`}
                                                render={({ field }) => {
                                                    return (
                                                        <CustomField
                                                            label={t("form.fields.first-name")}
                                                            error={!!errors.firstname}
                                                            errorMessage={t(
                                                                "form.fields.first-name-error-text"
                                                            )}
                                                            onChange={field.onChange}
                                                        />
                                                    );
                                                }}
                                            />
                                        </Col>

                                        <Col size={{ s: 12, m: 6, l: 6, xl: 6, xxl: 6 }}>
                                            <Controller
                                                control={control}
                                                name={`lastname`}
                                                render={({ field }) => {
                                                    return (
                                                        <CustomField
                                                            label={t("form.fields.last-name")}
                                                            error={!!errors.lastname}
                                                            errorMessage={t(
                                                                "form.fields.last-name-error-text"
                                                            )}
                                                            onChange={field.onChange}
                                                        />
                                                    );
                                                }}
                                            />
                                        </Col>

                                        <Col size={{ s: 12, m: 6, l: 6, xl: 6, xxl: 6 }}>
                                            <Controller
                                                control={control}
                                                name={`company`}
                                                render={({ field }) => {
                                                    return (
                                                        <CustomField
                                                            label={t("form.fields.company")}
                                                            error={!!errors.company}
                                                            errorMessage={t(
                                                                "form.fields.company-error-text"
                                                            )}
                                                            onChange={field.onChange}
                                                        />
                                                    );
                                                }}
                                            />
                                        </Col>

                                        <Col size={{ s: 12, m: 6, l: 6, xl: 6, xxl: 6 }}>
                                            <Controller
                                                control={control}
                                                name={`email`}
                                                render={({ field }) => {
                                                    return (
                                                        <CustomField
                                                            label={t("form.fields.mail")}
                                                            error={!!errors.email}
                                                            errorMessage={t(
                                                                "form.fields.mail-error-text"
                                                            )}
                                                            onChange={field.onChange}
                                                        />
                                                    );
                                                }}
                                            />
                                        </Col>

                                        <Col size={{ xl: 12, xxl: 12 }}>
                                            <Controller
                                                control={control}
                                                name={`dataprotection`}
                                                render={({ field }) => {
                                                    return (
                                                        <Checkbox
                                                            labelStart={t(
                                                                "form.checkbox-content.checkbox-start"
                                                            )}
                                                            labelLink={t(
                                                                "form.checkbox-content.checkbox-link"
                                                            )}
                                                            labelLinkTxt={t(
                                                                "form.checkbox-content.checkbox-link-txt"
                                                            )}
                                                            labelEnd={t(
                                                                "form.checkbox-content.checkbox-end"
                                                            )}
                                                            error={!!errors.dataprotection}
                                                            errorMessage={t(
                                                                "form.checkbox-error-text"
                                                            )}
                                                            onChange={field.onChange}
                                                        />
                                                    );
                                                }}
                                            />
                                        </Col>

                                        <Col size={{ xl: 12, xxl: 12 }}>
                                            <div className="form__actions">
                                                <Button type="submit">Submit</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </AnimateElement>
                        </div>
                    </Col>
                </Row>
            </FormWrapper>
        </Container>
    );
};
