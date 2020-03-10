import React from 'react';

type FormComponentProps = {
    children: React.ReactNode
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    className?: string | '',
}

const Form = ({ children, className, handleSubmit }: FormComponentProps) => (
    <form className={className} onSubmit={handleSubmit}>
        {children}
    </form>
);

export default Form;