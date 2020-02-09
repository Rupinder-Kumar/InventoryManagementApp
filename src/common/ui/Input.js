import React from 'react';

const CustomInputComponent = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => (
        <React.Fragment>
            <input className="form-control custom-input" type="text" {...field} {...props} />
        </React.Fragment>
);

export default CustomInputComponent;