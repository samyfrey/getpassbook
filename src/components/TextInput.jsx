import React from 'react';
import './styles/textInput.css';

export function TextInput({ value, setValue, type = 'text', label, name }) {
  ;

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container">
      <input type={type} value={value} onChange={handleChange} name={name} />
      <label className={value && 'filled'}>
        {label}
      </label>
    </div>
  );
}