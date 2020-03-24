import React from 'react';

import './style.sass';

type CheckboxProps = {
    className?: string | '',
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    name: string,
    required?: boolean | false,
    disabled?: boolean | false
    id?: string | '',
    error?: string | '',
    value?: string | '',
};

const Checkbox = ({ className, handleChange, name,
                   required,
                   disabled,
    id,
               value,
               error,}: CheckboxProps) => (
        <div className={`checkbox ${className}`}>
            <input className="checkbox__input" id={id} name={name} type="checkbox"/>
            <label htmlFor={id} className="checkbox__pseudo" />
        </div>
);

export default Checkbox;
