import React from 'react';
import './InputField.css';

const InputField = ({ type, state, value, onChange, className, style }) => {
  const inputClass = `input-field ${state} ${className}`;

  return (
    <input
      type={type}
      className={inputClass}
      value={value}
      onChange={onChange}
      style={style}
    />
  );
};

export default InputField;
