import React from 'react';

type MainLayoutProps = {
    children: React.ReactNode
}
const MainLayout = ({ children }: MainLayoutProps) => (
    <div className="page">
        <div className="container container--main">
            {children}
        </div>
    </div>
);

export default MainLayout;
