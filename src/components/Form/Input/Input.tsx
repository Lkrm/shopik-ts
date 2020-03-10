import React from 'react';

type InputProps = {
    className?: string | '',
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    name: string,
    type: string | 'text',
    required?: boolean | false,
    disabled?: boolean | false
    label: string,
};

const Input = ({ className, handleChange, name,
                   label, type, required, disabled }: InputProps) => (
        <div className={`form-group ${className}`}>
            <label htmlFor="exampleFormControlInput1">{label}</label>
            <input className="field-group__input form-control"
                   onChange={handleChange} name={name} type={type} required={required} disabled={disabled}/>
        </div>
);

export default Input;