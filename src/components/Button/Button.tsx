import React from 'react';

type ButtonProps = {
    children: React.ReactNode,
    className: string,
    type?: string | HTMLButtonElement,
    name?: string | '',
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    disabled: boolean
};

const Button = ({ className, handleClick, children, name, type, disabled }: ButtonProps) => (
    <button className={className}  onClick={handleClick} name={name} type={type} disabled={disabled}>{children}</button>
);

export default Button;