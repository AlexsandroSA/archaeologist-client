import React from 'react';

import { Label, InputWrapper, InputBase, FeedbackMessage } from './styles';

const Input = ({ id, value, name, label, type, touched, placeholder, onChange, onBlur, error }) => (
    <InputWrapper>
        <Label htmlFor={id}>{label}</Label>
        <InputBase
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            touched={touched}
            onChange={onChange}
            onBlur={onBlur}
        />
        {touched && error &&  <FeedbackMessage>{error}</FeedbackMessage>}
    </InputWrapper>
);

export default Input;
