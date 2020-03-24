import React from 'react';

type InputProps = {
    className?: string | '',
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    name: string,
    type: string | 'text',
    required?: boolean | false,
    disabled?: boolean | false
    label: string,
    error?: string | '',
    value?: string | '',
};

const Input = ({ className, handleChange, name,
                   label, type,
                   required,
                   disabled,
               value,
               error,}: InputProps) => (
        <div className={`form-group ${className}`}>
            <label htmlFor="exampleFormControlInput1">{label}</label>
            <input className={`field-group__input form-control has-error`}
                   onChange={handleChange}
                   name={name}
                   type={type}
                   required={required}
                   disabled={disabled}
                   value={value}
            />
            <small className="error">{error}</small>
        </div>
);

export default Input;