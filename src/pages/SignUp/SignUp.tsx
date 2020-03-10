import React from 'react';
import Form from "../../components/Form/Form/Form";
import Input from "../../components/Form/Input/Input";
import {AuthLayout, Button} from "../../components";
import {Link} from "react-router-dom";

const SignUp = () => <AuthLayout>
    <div className="row">
        <div className="col-lg-6 offset-lg-3 mt-5">
            <Form className="p-1" handleSubmit={() => {}}>\
                <h2>Registration</h2>
                <Input
                    label="Email address or Username"
                    handleChange={(e) => console.log(e)}
                    name="shit" type="email"/>
                <Input
                    label="Password"
                    handleChange={(e) => console.log(e)}
                    name="shit" type="password"/>
                <Button className="btn btn-primary">Sign up</Button>
            </Form>
            <div className="flex-row">
                <Link to="/forgot-password" className="mr-2">Forgot password? </Link>
                <Link to="/sign-up">Do you have not an account? </Link>
            </div>
        </div>
    </div>
</AuthLayout>;

export default SignUp;