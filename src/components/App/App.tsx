import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LogIn, SignUp, ForgotPassword, Main } from '../../pages';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/log-in" component={LogIn}  />
            <Route path="/sign-up" component={SignUp}  />
            <Route path="/main" component={Main}  />
            <Route path="/forgot-password" component={ForgotPassword}  />
            <Route component={LogIn}  />
        </Switch>
    </BrowserRouter>
);

export default App;