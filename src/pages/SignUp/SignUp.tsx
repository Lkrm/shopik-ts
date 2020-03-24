import React from 'react';
import Form from "../../components/Form/Form/Form";
import Input from "../../components/Form/Input/Input";
import {AuthLayout, Button} from "../../components";
import {Link} from "react-router-dom";
import * as yup from 'yup';

import { common } from '../../utils/helpers/';
import {useFormik} from "formik";
const { propOr } = common;

// @ts-ignore
const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .max(12)
        .min(6)
        .required(),
    password: yup
        .string()
        .max(25)
        .min(5)
        .required(),
    confirmPassword: yup
        .string()
        .max(25)
        .min(5)
        .required()
});
const SignUp = () => {
    // @ts-ignore
    const { handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: validationSchema,
    });
    return (<AuthLayout>
        <div className="row">
            <div className="col-lg-6 offset-lg-3 mt-5">
                <Form className="p-1" handleSubmit={handleSubmit}>
                    <h2>Registration</h2>
                    <Input
                        label="Email address or Username"
                        handleChange={handleChange}
                        error={propOr('', 'email', errors)}
                        name="email"
                        type="email"
                    />
                    <Input
                        label="Password"
                        handleChange={handleChange}
                        error={propOr('', 'password', errors)}
                        name="password"
                        type="password"
                    />
                    <Input
                        label="Confirm Password"
                        handleChange={handleChange}
                        error={propOr('', 'confirmPassword', errors)}
                        name="confirmPassword"
                        type="password"
                    />
                    <Button className="btn btn-primary">Sign up</Button>
                </Form>
                <div className="flex-row">
                    <Link to="/forgot-password" className="mr-2">Forgot password? </Link>
                    <Link to="/log-in">Do you have not an account? </Link>
                </div>
            </div>
        </div>
    </AuthLayout>)
};

export default SignUp;