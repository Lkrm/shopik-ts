import React from 'react';
import { Link } from 'react-router-dom';

import { AuthLayout, Button } from '../../components';
import Form from '../../components/Form/Form/Form';
import Input from "../../components/Form/Input/Input";

const LogIn = () => <AuthLayout>
    <div className="row">
        <div className="col-lg-6 offset-lg-3 mt-5">
            <Form className="p-1" handleSubmit={() => {}}>
                <h2>Authorization</h2>
                <Input
                    label="Email address or Username"
                    handleChange={(e) => console.log(e)}
                    name="shit" type="email"/>
                <Input
                    label="Password"
                    handleChange={(e) => console.log(e)}
                    name="shit" type="password"/>
                <Button className="btn btn-primary">Log In</Button>
            </Form>
            <div className="flex-row">
                <Link to="/forgot-password" className="mr-2">Forgot password? </Link>
                <Link to="/log-in">Do you already have an account? </Link>
            </div>
        </div>
    </div>
</AuthLayout>;

export default LogIn;