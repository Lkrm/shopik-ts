import React from 'react';
import Form from "../../components/Form/Form/Form";
import Input from "../../components/Form/Input/Input";
import {AuthLayout, Button} from "../../components";
import {Link} from "react-router-dom";

const ForgotPassword = () => <AuthLayout>
    <div className="row">
        <div className="col-lg-6 offset-lg-3 mt-5">
            <Form className="p-1" handleSubmit={() => {}}>
                <h2>Forgot password ?</h2>
                <Input
                    label="Email address or Username"
                    handleChange={(e) => console.log(e)}
                    name="shit" type="email"/>
                <Button className="btn btn-primary">Send</Button>
            </Form>
            <div className="flex-row">
                <Link to="/forgot-password" className="mr-2">Forgot password? </Link>
                <Link to="/log-in">Do you already have an account? </Link>
            </div>
        </div>
    </div>
</AuthLayout>;

export default ForgotPassword;