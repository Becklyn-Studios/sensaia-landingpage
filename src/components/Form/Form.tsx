/**
 * External dependencies
 */
import React from "react";
import classNames       from 'classnames';
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver }  from "@hookform/resolvers/yup";
import * as yup         from "yup";

import { Container } from "../Container/Container";
import { Headline } from "../Headline/Headline";
import { BlockHead } from "../BlockHead/BlockHead";
import { Row } from "../Row/Row";
import { Col } from "../Col/Col";

const SignupSchema = yup.object().shape({
    name:    yup.string().required(),
});

const FormWrapper = styled.div`
    .row {
        justify-content:center;
    }

    .form__head {
        text-align:center;
    }
`;

type FormValues = {
    name: string;
}

export const Form: React.FC<{}> = () => {
    const { t } = useTranslation("common");

    const { register, handleSubmit, formState: { errors }  } = useForm<FormValues>({
        resolver: yupResolver(SignupSchema)
    });


    const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

    return (
        <Container>
            <FormWrapper>
                <Row>
                    <Col size={{ s: 12, m: 12, l: 12, xl: 8, xxl: 6 }}>
                        <div className="form__head">
                            <BlockHead>
                                <Headline size="large">{t("form.title")}</Headline>
                                
                                <p>{t("form.sub-title")}</p>
                            </BlockHead>
                        </div>

                        <div className="form__body">
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className={classNames('form__group required', { "error": errors.name })}>
                                    <label className="form__label" >Name</label>
                                    
                                    <div className="form__controls">
                                        <input className="field" {...register("name")}/>
                                    </div>
                                </div>

                                <button type="submit">submit</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </FormWrapper>
        </Container>
    );
};
