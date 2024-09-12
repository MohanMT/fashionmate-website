import React, { useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import './style.scss';
import Image from 'next/image';

const TextInput = ({
  label,
  name,
  type,
  placeholder,
  register,
  errors,
  rules,
  className,
  autocomplete,
  disabled,
  inputIcon,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={`TextInput ${className ? className : ''}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className="relative">
        <input
          name={name}
          type={inputType}
          placeholder={placeholder}
          autoComplete={autocomplete}
          {...register(name, rules)}
          disabled={disabled}
          className={`${type === 'password' ? 'pr-14' : 'pr-3'}`}
        />
        {inputIcon && (
          <span className="inputIcon">
            <Image src={inputIcon} width={30} height={30} alt={name} />
          </span>
        )}
        {type === 'password' && (
          <span onClick={togglePasswordVisibility} className="passwordIcon">
            {showPassword ? (
              <Image
                src={`/assets/icon/view.png`}
                width={22}
                height={20}
                alt={name}
              />
            ) : (
              <Image
                alt={name}
                src={`/assets/icon/hide.png`}
                width={22}
                height={20}
              />
            )}
          </span>
        )}
      </div>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className='error-message'>{message}</p>
        )}
      />
      <checkbox/>
    </div>
  );
};

export default TextInput;

