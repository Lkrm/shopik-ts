import React from 'react';

type AuthLayoutProps = {
    children: React.ReactNode
}
const AuthLayout = ({ children }: AuthLayoutProps) => (
    <div className="page-auth">
        <div className="container">
            {children}
        </div>
    </div>
);

export default AuthLayout;