import React from 'react';

type ButtonProps = {
    children: React.ReactNode | string,
    className?: string | '',
    type?: string | 'button',
    name?: string | '',
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    disabled?: boolean | false,
};

//

const Button = ({ className, handleClick, children, name, type, disabled }: ButtonProps) => <button
    // @ts-ignore
    type={type}
    className={className}
    onClick={handleClick}
    name={name}
    disabled={disabled}
>{children}</button>;

export default Button;