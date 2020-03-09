import React from 'react';

type InputProps = {
    className: string | '',
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    name: string,
    type: string | 'text',
    required: boolean | false,
    disabled: boolean | false
};

const Input = ({ className, handleChange, name, type, required, disabled }: InputProps) => (
    <div className={`field-group ${className}`}>
        <Input className="field-group__input"
               onChange={handleChange} name={name} type={type} required={required} disabled={disabled}/>
    </div>
);

export default Input;