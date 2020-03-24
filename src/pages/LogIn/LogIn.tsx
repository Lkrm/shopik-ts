import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { AuthLayout, Button } from '../../components';
import Form from '../../components/Form/Form/Form';
import Input from '../../components/Form/Input/Input';
import { common } from '../../utils/helpers/';
const { propOr } = common;

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
        .required()
});

const LogIn = () => {
    // @ts-ignore
    const { handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
    });
    return (<AuthLayout>
        <div className="row">
            <div className="col-lg-6 offset-lg-3 mt-5">
                <Form className="p-1" handleSubmit={handleSubmit}>
                    <h2>Authorization</h2>
                    <Input
                        label="Email address or Username"
                        handleChange={handleChange}
                        name="email"
                        type="email"
                        error={propOr('', 'email', errors)}
                    />
                    <Input
                        label="Password"
                        handleChange={handleChange}
                        name="password"
                        type="password"
                        error={propOr('', 'password', errors)}
                    />
                    <Button className="btn btn-primary">Log In</Button>
                </Form>
                <div className="flex-row">
                    <Link to="/forgot-password" className="mr-2">Forgot password? </Link>
                    <Link to="/sign-up">Do you already have an account? </Link>
                </div>
            </div>
        </div>
    </AuthLayout>);
};

export default LogIn;