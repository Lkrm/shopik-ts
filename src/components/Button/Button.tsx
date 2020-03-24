import React from 'react';

type ButtonProps = {
    children: React.ReactNode | string,
    className?: string | '',
    type?: 'button' | 'submit' | 'reset',
    name?: string | '',
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    disabled?: boolean | false,
};

//

const Button = ({ className,
                    handleClick,
                    children,
                    name, type,
                    disabled }: ButtonProps) => <button
    className={className}
    type={type}
    onClick={handleClick}
    name={name}
    disabled={disabled}
>{children}</button>;

export default Button;