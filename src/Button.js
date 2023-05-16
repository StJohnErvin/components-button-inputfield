import React from 'react';
import './Button.css';

const Button = ({ state, variation, disabled, onClick, children, className, style }) => {
  const buttonClass = `button ${state} ${variation} ${className}`;

  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
