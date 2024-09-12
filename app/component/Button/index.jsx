import React from 'react';
import './style.css';

const Button = ({ type = 'button', onClick, disabled = false, children, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`Button ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

