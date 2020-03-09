import React from 'react';

type AuthLayoutProps = {
    children: React.ReactNode
}
const AuthLayout = ({ children }: AuthLayoutProps) => (
    <div className="page-auth">
        {children}
    </div>
);

export default AuthLayout;